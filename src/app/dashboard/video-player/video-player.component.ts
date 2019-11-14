import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../types';
import { Observable } from 'rxjs';
import { VideoLoaderService } from '../services/video-loader.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  video: Observable<Video>;
  
  constructor(vds: VideoLoaderService) { 
    this.video = vds.currentVideo;

  }
 
  ngOnInit() {
  }

}
