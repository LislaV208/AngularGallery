import { Component, OnInit } from '@angular/core';
import GALLERY from '../../constants/galleries';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {

  title: string;
  description: string;
  galleries: any = [];
  searchValue: string;

  limit: number;
  currentPage: number;
  start: number;
  end: number;
  numberOfPages: number[] = [];

  showGalleryForm: boolean;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '31'
      })     
  };

  constructor(private http: HttpClient) {
      this.title = 'Zdjęcia koncertowe';
      this.description = 'Poniżej znajdują się galerie ze zdjęciami z koncertów moich ulubionych zespołów.';
   }

  ngOnInit() {
    this.showGalleryForm = false;
    this.currentPage = parseInt(localStorage.getItem('galleryPage')) || 0;
    this.setCurrentPage(this.currentPage);

    this.http.get('http://project.usagi.pl/gallery',this.httpOptions).toPromise().then((response) => {
        console.log(response);
        
        this.galleries = response;
        this.numberOfPages = Array(Math.ceil(this.galleries.length / this.limit)).fill(1);

        // console.log('number of pages', this.numberOfPages);
      });
  }

  setSearchValue($event) {
    console.log($event);
    this.searchValue = $event;
  } 

  exportGalleries() {
    GALLERY.forEach(gallery => {
      delete(gallery.galleryId);
      this.http.post('http://project.usagi.pl/gallery', gallery,
      this.httpOptions).toPromise().then((response) => {
        // console.log('success', response);
        this.galleries.push(response);
        this.numberOfPages = Array(Math.ceil(this.galleries.length / this.limit)).fill(1);
      }, (errResponse) => {
        console.log('error', errResponse);
      });
    });
   }

   removeGalleries() {
    this.galleries.forEach(gallery => {
    this.http.post('http://project.usagi.pl/gallery/delete/' +
    gallery.galleryId, {}, this.httpOptions).toPromise().then((response) => {
      this.galleries.splice(0, 1);
      console.log('success', response);
    }, (errResponse) => {
      console.log('error', errResponse);
    });
  });

    this.numberOfPages = Array(Math.ceil(this.galleries.length / this.limit)).fill(1);
   }
   
   removeGallery(id) {
     if (id === "")
      id = 0;

    console.log("ID", id);

     this.http.post('http://project.usagi.pl/gallery/delete/' + id, {}, this.httpOptions).toPromise().then((response) => {
       for (let i in this.galleries) {
         if (this.galleries[i].galleryId == id) {
           this.galleries.splice(i, parseInt(i) + 1);
          }
        }
        
        console.log('success', response);
      }, (errResponse) => {
        console.log('error', errResponse);
      });
      this.numberOfPages = Array(Math.ceil(this.galleries.length / this.limit)).fill(1);
   }

   setCurrentPage(page = 0) {
    this.limit = 3;
    this.currentPage = page;
    this.start = this.currentPage * this.limit;
    this.end = this.start + 3;

    localStorage.setItem('galleryPage', this.currentPage.toString());
   }

  saveGallery(event) {
    delete(event.galleryId);
    this.http.post('http://project.usagi.pl/gallery', event, this.httpOptions).toPromise().then((response) => {
      this.galleries.push(response);
      this.numberOfPages = Array(Math.ceil(this.galleries.length / this.limit)).fill(1);
      this.showGalleryForm = false;
    });
   }
   
}