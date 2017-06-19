import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component'
import { MediaItemListComponent } from './media-item-list/media-item-list.component'

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
