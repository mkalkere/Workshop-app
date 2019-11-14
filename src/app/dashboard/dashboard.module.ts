import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', component: VideoDashboardComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [VideoDashboardComponent, 
                  VideoListComponent, 
                  VideoPlayerComponent, 
                  StatFiltersComponent, 
                  VideoComponent
                ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class DashboardModule { }
