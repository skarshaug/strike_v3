import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
import * as CapacitorVPPlugin from 'capacitor-video-player';
const { CapacitorVideoPlayer, Device } = Plugins;
@Component({
  selector: 'app-strike-details',
  templateUrl: './strike-details.page.html',
  styleUrls: ['./strike-details.page.scss'],
})
export class StrikeDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


async testPlugin(){ 
  let videoPlayer: any;
  let url:string;
  const info = await Device.getInfo();
  if (info.platform === "ios" || info.platform === "android") {
    videoPlayer = CapacitorVideoPlayer;
    if (info.platform === "ios") {
      url = "assets/video/IMG_6526.MOV"
    } else {
      url ="raw/video"
    }
  } else {
    videoPlayer = CapacitorVPPlugin.CapacitorVideoPlayer;
    url = "assets/video/IMG_6526.MOV"
  }
  const res:any  = await videoPlayer.play({url:url});
}




}
