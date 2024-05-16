import * as osn from "obs-studio-node";
import * as path from "path";
import StreamConfig from "./config/stream";

import { ImageSourceDemo } from "./examples/image_source";
import { ffmpegSourceDemo } from "./examples/ffmpeg_source";
import { TextSourceDemo } from "./examples/text_source";

import { SetSetting } from "./utils/obs_utils";

const workingPath = path.join(__dirname, "../node_modules/obs-studio-node");
const obsDataPath = path.join(__dirname, "../obs-data");

console.log("init");
osn.NodeObs.IPC.host(`obs-studio-node-example-${Math.random() * 100}`);
osn.NodeObs.SetWorkingDirectory(workingPath);
osn.NodeObs.OBS_API_initAPI("en-US", obsDataPath, "1.0.0", "");

console.log("create scene");
const scene = osn.SceneFactory.create("test-scene");

console.log("add and set bgItem");
const bgItem = scene.add(
  ImageSourceDemo("bg", path.join(__dirname, "../assets/bg.jpg"))
);
bgItem.position = { x: 500, y: 200 };
bgItem.scale = { x: 0.1, y: 0.1 };

console.log("add and set gifItem");
const gifItem = scene.add(
  ffmpegSourceDemo("bg", path.join(__dirname, "../assets/funny.gif"))
);
gifItem.position = { x: 200, y: 200 };
gifItem.scale = { x: 0.8, y: 0.8 };

// 不可用
// console.log("add browser source");
// const bItem = scene.add(BrowserSourceDemo("bs"));
// bItem.position = { x: 0, y: 0 };
// bItem.scale = { x: 1, y: 1 };

console.log("add and set text");
const textItem = scene.add(TextSourceDemo("text", "正在测试直播中..."));
textItem.position = { x: 1920 / 2 - 200, y: 1080 - 200 };
textItem.scale = { x: 1, y: 1 };
textItem.moveTop(); // 放到最顶层

console.log("add and set mp4Item");
const mp4Item = scene.add(
  ffmpegSourceDemo("bg", path.join(__dirname, "../assets/funny.mp4"))
);
mp4Item.position = { x: 0, y: 0 };
mp4Item.scale = { x: 0.5, y: 0.5 };
mp4Item.moveBottom(); // 放在最底层

// 不可用
// console.log("set audio mic");
// const inputDeviceIndex = 1;
// const inputDevices = osn.NodeObs.OBS_settings_getInputAudioDevices() as {
//   id: string;
//   description: string;
// }[];
// console.log("use", inputDevices[inputDeviceIndex]);
// useAudioInputSourceDemo(
//   "Mic/Aux",
//   inputDevices[inputDeviceIndex].id,
//   E_AUDIO_CHANNELS.INPUT_1
// );

console.log("set streamkey");
SetSetting("Stream", "streamType", "rtmp_custom");
SetSetting("Stream", "server", StreamConfig.server);
SetSetting("Stream", "key", StreamConfig.key);

console.log("create videoInfo");
const defaultVideoContext = osn.VideoFactory.create();
defaultVideoContext.video = {
  fpsNum: 30,
  fpsDen: 1,
  baseWidth: 1920,
  baseHeight: 1080,
  outputWidth: 1920,
  outputHeight: 1080,
  outputFormat: osn.EVideoFormat.NV12,
  colorspace: osn.EColorSpace.CS709,
  range: osn.ERangeType.Partial,
  scaleType: osn.EScaleType.Bilinear,
  fpsType: osn.EFPSType.Fractional,
};
osn.NodeObs.OBS_service_setVideoInfo(defaultVideoContext, "horizontal");
osn.Global.setOutputSource(0, scene);

console.log("start streaming");
osn.NodeObs.OBS_service_startStreaming();
