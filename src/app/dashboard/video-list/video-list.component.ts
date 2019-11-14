import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../types';
import { Observable } from 'rxjs';
import { VideoLoaderService } from '../services/video-loader.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  selectedVideo: Observable<Video>;

  @Input() videos: Video[];

  @Output() videoSelected = new EventEmitter<Video>();

  constructor(private vds: VideoLoaderService) {
    this.selectedVideo = this.vds.currentVideo;
  }

  ngOnInit() {}

  selectVideo(video: Video) {
    this.vds.setCurrentVideo(video);
  }
}
