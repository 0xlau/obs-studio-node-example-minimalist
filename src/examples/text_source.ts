// 文字源 Demo

import * as osn from "obs-studio-node";

// Windows: text_gdiplus
// MacOS:   text_ft2_source

export function TextSourceDemo(name: string, text?: string) {
  const textSource = osn.InputFactory.create("text_ft2_source", name);

  let settings = textSource.settings;
  settings["text"] = text;
  // settings["color1"] = ;
  // settings["color2"] = ; // 渐变的时候使用
  settings["font"]["face"] = "Songti SC"; // 中文必须设置支持中文的字体
  settings["font"]["size"] = 64;

  textSource.update(settings);
  textSource.save();

  return textSource;
}
