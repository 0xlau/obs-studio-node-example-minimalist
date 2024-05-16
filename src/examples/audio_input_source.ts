// 音频输入源 Demo - 无法使用，能占用麦克风设备，但推流没声音
import * as osn from "obs-studio-node";

export enum E_AUDIO_CHANNELS {
  OUTPUT_1 = 1,
  OUTPUT_2 = 2,
  INPUT_1 = 3,
  INPUT_2 = 4,
  INPUT_3 = 5,
}

// Windows: wasapi_input_capture
// MacOS:   coreaudio_input_capture
export function useAudioInputSourceDemo(
  name: string,
  device_id: string,
  channel: E_AUDIO_CHANNELS
) {
  const audioInputSource = osn.InputFactory.create(
    "coreaudio_input_capture",
    name
  );

  let settings = audioInputSource.settings;
  settings["device_id"] = device_id;

  audioInputSource.update(settings);
  audioInputSource.save();

  audioInputSource.volume = 1;
  audioInputSource.muted = false;

  osn.Global.setOutputSource(channel, audioInputSource);
}
