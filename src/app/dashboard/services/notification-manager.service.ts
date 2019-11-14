
import { Injectable } from '@angular/core';

import {VideoListComponent} from '../video-list/video-list.component';
import { VideoDashboardComponent } from '../video-dashboard/video-dashboard.component';
import { VideoComponent } from '../video/video.component';
import { Video } from '../types';

@Injectable({
    providedIn: 'root'
})
export class NotificationManagerService{

    currentVideo : Video;

    constructor(private videoListComponent : VideoListComponent ,
                private videoDashboardComponent : VideoDashboardComponent,
                privatevideoComponet : VideoComponent
                 )
                {

                }

    getCurrentVideo(){
        return this.currentVideo;
    }            

    setCurrentVideo(video : Video){
        this.currentVideo = video;

        this.videoListComponent.selectVideo(video);
    }


}