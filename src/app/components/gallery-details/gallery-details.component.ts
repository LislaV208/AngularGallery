import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGallery } from '../../interfaces/igallery';
import GALLERY from '../../constants/galleries';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.scss']
})
export class GalleryDetailsComponent implements OnInit {

    galleryId: string;
    gallery: IGallery;

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': '31'
        })     
    };

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
      this.galleryId = this.route.snapshot.paramMap.get('galleryId');

      this.http.get('http://project.usagi.pl/gallery',this.httpOptions).toPromise().then((response) => {
        for (let i in response) {

          if (response[i].galleryId == this.galleryId) {
            this.gallery = response[i];
          }

        }
      });
  }

}
