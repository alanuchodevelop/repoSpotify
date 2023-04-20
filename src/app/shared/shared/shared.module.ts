import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidevarComponent } from './components/sidevar/sidevar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';

@NgModule({
  declarations: [
  
    SidevarComponent,
       MediaplayerComponent,
       HeaderUserComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidevarComponent,
    MediaplayerComponent,
    HeaderUserComponent
  ]
})
export class SharedModule { }
