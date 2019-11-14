import { Component, OnInit } from '@angular/core';
import { Video } from '../types';
import { HttpClient } from '@angular/common/http';
import { VideoLoaderService } from '../services/video-loader.service';
import { Observable } from 'rxjs';

const apiUrl = 'https://api.angularbootcamp.com/videos';

// Or connect to the hosted demo API (works from StackBlitz):
// const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {

  videosData: Observable<Video[]>;

  constructor(svc: VideoLoaderService) { 

    this.videosData = svc.loadVideos()

  }

  ngOnInit() {
  }

  onVideoSelected(video: Video){
    console.log(video);
    
  }
 
  
}
