// 图片源 Demo

import * as osn from "obs-studio-node";

export function ImageSourceDemo(name: string, _path: string) {
  const imageSource = osn.InputFactory.create("image_source", name, {
    file: _path,
  });

  let settings = imageSource.settings;
  imageSource.update(settings);
  imageSource.save();

  return imageSource;
}
