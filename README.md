# 最小 obs-studio-node 使用示例

目前能够实现的效果如下图

![效果图](./assets/screenshot.png)

## 已尝试研究的 SourceType 列表（MacOS 环境下）

- [x] text_ft2_source（macos）
- [ ] text_gdiplus（windows）
- [x] image_source
- [x] ffmpeg_source（mp4, gif）
- [ ] browser_source（不可用有待继续研究）
- [ ] coreaudio_input_capture（能占用设备，但推流无声音）

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

运行 ` yarn start` 开始推流

```bash
yarn start
```

## obs 日志

程序启动后，项目的根目录会产生 `obs-data` 文件夹

日志位置：`./obs-data/node-obs/logs`
