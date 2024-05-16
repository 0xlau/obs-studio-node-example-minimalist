# 最小 obs-studio-node 使用示例

目前能够实现的效果如下图

![效果图](./assets/screenshot.png)

## 已尝试研究的 SourceType 列表（打勾的是可以用的）

- [x] text_ft2_source（macos）
- [ ] text_gdiplus（windows）
- [x] image_source
- [x] ffmpeg_source（mp4, gif）
- [ ] browser_source（not available）
- [x] coreaudio_input_capture（macos, mic）
- [x] av_capture_input（macos, camera）

## MacOS 可用的 SourceType 列表（打勾即已经看过）

- [x] image_source
- [ ] color_source
- [x] browser_source
- [ ] slideshow
- [x] ffmpeg_source
- [x] text_ft2_source
- [x] scene
- [x] coreaudio_input_capture
- [ ] coreaudio_output_capture
- [x] av_capture_input
- [ ] display_capture
- [ ] audio_line
- [ ] ndi_source
- [ ] vlc_source
- [ ] window_capture
- [ ] syphon-input
- [ ] decklink-input
- [ ] mediasoupconnector

## Windows 可用的 SourceType 列表（打勾即已经看过）

- [x] image_source
- [ ] color_source
- [x] browser_source
- [ ] slideshow
- [x] ffmpeg_source
- [x] text_gdiplus
- [ ] monitor_capture
- [ ] window_capture
- [ ] game_capture
- [ ] dshow_input
- [ ] wasapi_input_capture
- [ ] wasapi_output_capture
- [ ] decklink-input
- [x] scene
- [ ] ndi_source
- [ ] openvr_capture
- [ ] screen_capture
- [ ] liv_capture
- [ ] ovrstream_dc_source
- [ ] vlc_source
- [ ] soundtrack_source
- [ ] mediasoupconnector
- [ ] wasapi_process_output_capture
- [ ] spout_capture

## 运行环境须知

本人只用了 MacOS 的环境下进行测试，在 MacOS 环境下需要打开摄像头、麦克风权限才可以使用对应功能
在 `./src/utils/permission.ts` 中申请了 MacOS 的摄像头、麦克风权限

> ！需要注意的是：执行终端最好用的是 `VSCode、Tabby、iTerm2` 等应用，而非系统自带 `Terminal.app` 执行，否则无法申请权限。

## 推流链接设置

推流密钥及服务器 URL 位于项目的 `src/config/stream.ts` 中设置

```js
const streamConfig: StreamConfig = {
  server: "<streamServer>",
  key: "<streamKey>",
};
```

## 安装以及运行

直接执行 `yarn install` 即可，并且等待依赖包全部安装完毕。

```bash
yarn install
```

运行 `yarn start` 开始推流

```bash
yarn start
```

## obs 日志

程序启动后，项目的根目录会产生 `obs-data` 文件夹

日志位置：`./obs-data/node-obs/logs`
