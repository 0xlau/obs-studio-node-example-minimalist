import * as nmp from "node-mac-permissions";
export function applyPermission() {
  // 申请摄像头权限 MacOS
  nmp
    .askForCameraAccess()
    .then((status) => {
      if (status === "authorized") {
        console.log("Camera access granted");
      } else {
        console.log("Camera access denied");
      }
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
    });
  // 申请麦克风权限 MacOS
  nmp
    .askForMicrophoneAccess()
    .then((status) => {
      if (status === "authorized") {
        console.log("Microphone access granted");
      } else {
        console.log("Microphone access denied");
      }
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
    });
}
