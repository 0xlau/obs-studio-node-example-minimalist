// ffmpeg Demo
import * as osn from "obs-studio-node";

export function ffmpegSourceDemo(name: string, _path: string) {
  const ffmpegSource = osn.InputFactory.create("ffmpeg_source", name, {
    is_local_file: true,
    local_file: _path,
    looping: true,
  });

  let settings = ffmpegSource.settings;

  ffmpegSource.update(settings);
  ffmpegSource.save();

  return ffmpegSource;
}
