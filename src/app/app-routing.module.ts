import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleriesComponent } from './components/galleries/galleries.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GalleryDetailsComponent } from './components/gallery-details/gallery-details.component';

const routes: Routes = [{
    path: 'galleries',
    component: GalleriesComponent
}, {
    path: 'dashboard',
    component: DashboardComponent
}, {
 path: '',
 redirectTo: '/dashboard',
 pathMatch: 'full'
}, {
    path: 'galleries/:galleryId',
    component: GalleryDetailsComponent
}];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
