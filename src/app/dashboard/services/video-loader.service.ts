import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Video } from '../types';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


const apiUrl = 'https://api.angularbootcamp.com/videos';

@Injectable({
    providedIn: 'root'
})
export class VideoLoaderService{
    
    currentVideo = new Subject<Video>();

    constructor(private http: HttpClient){ }

        loadVideos() : Observable<Video[]>{
            return this.http
                .get<Video[]>(apiUrl)
                .pipe(map(convertTitleToUpperCase));
        }

        setCurrentVideo(video: Video) {
            this.currentVideo.next(video);
          }
    }

    const convertTitleToUpperCase = (videos : Video[]) => {
       return videos.slice(0,5).map(v => ({...v,title: v.title.toUpperCase()}) )
    }