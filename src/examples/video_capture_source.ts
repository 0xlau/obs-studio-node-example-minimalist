// 视频/摄像源 Demo

import * as osn from "obs-studio-node";

// Windows: dshow_input { video_device_id: string }
// MacOS:   av_capture_input { device: string }

export function VideoCaptureSourceDemo(name: string, device_id: string) {
  const videoCaptureSource = osn.InputFactory.create("av_capture_input", name);

  let settings = videoCaptureSource.settings;
  settings["device"] = device_id;

  videoCaptureSource.update(settings);

  return videoCaptureSource;
}
