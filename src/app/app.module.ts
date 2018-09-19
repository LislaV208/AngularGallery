import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';


import { AppComponent } from './app.component';
import { PolishDatePipe } from './pipes/polish-date.pipe';
import { SearchGalleriesPipe } from './pipes/search-galleries.pipe';
import { NavComponent } from './components/nav/nav.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleriesSearchComponent } from './components/galleries-search/galleries-search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GalleryDetailsComponent } from './components/gallery-details/gallery-details.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { AddGalleryFormComponent } from './components/add-gallery-form/add-gallery-form.component';



@NgModule({
  declarations: [
    AppComponent,
    PolishDatePipe,
    SearchGalleriesPipe,
    NavComponent,
    GalleriesComponent,
    GalleryComponent,
    GalleriesSearchComponent,
    DashboardComponent,
    GalleryDetailsComponent,
    CommentFormComponent,
    AddGalleryFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
