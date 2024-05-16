// 浏览器源 Demo - 无法使用，可能因为需要某些环境
// 在 stream-labs/desktop 上dev运行也会闪退，但是打包后可以使用
import * as osn from "obs-studio-node";

export function BrowserSourceDemo(
  name: string,
  url: string = "https://streamlabs.com/browser-source"
) {
  const browserSource = osn.InputFactory.create("browser_source", name);

  let settings = browserSource.settings;
  console.log(settings);
  browserSource.update(settings);
  browserSource.save();

  return browserSource;
}
