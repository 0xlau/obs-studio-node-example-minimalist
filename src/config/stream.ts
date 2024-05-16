interface StreamConfig {
  server: string;
  key: string;
}

const streamConfig: StreamConfig = {
  server: "rtmp://live-push.bilivideo.com/live-bvc/",
  key: "?streamname=live_393341686_43527509&key=0711a12cfa0e319bbd55db99f4d0aa03&schedule=rtmp&pflag=1",
};

export default streamConfig;
