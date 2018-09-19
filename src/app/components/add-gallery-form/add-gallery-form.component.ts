import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IGallery } from '../../interfaces/igallery';
import * as uuid from 'uuid/v4';


@Component({
  selector: 'add-gallery-form',
  templateUrl: './add-gallery-form.component.html',
  styleUrls: ['./add-gallery-form.component.scss']
})
export class AddGalleryFormComponent implements OnInit {

  @Output() 
  saveGallery: EventEmitter<IGallery> = new EventEmitter<IGallery>();


  gallery: IGallery;

  constructor() {
    this.gallery = this.setEmptyGallery();
  }

  ngOnInit() {
    console.log('add-form', this.gallery);
  }

  onSubmit() {
    this.saveGallery.emit(this.gallery);
  }

  setEmptyGallery() {

    return {
      galleryId: '',
      title: '',
      thumbUrl: '',
      dateCreated: '',
      description: '',
      tags: [],
      photos: [this.setEmptyPhoto()]
    };
  }

  setEmptyPhoto() {
    return {
      photoId: uuid(),
      thumbUrl: '',
      imgUrl: ''
    };
  }

  addPhoto() {
    this.gallery.photos.push(this.setEmptyPhoto());
  }

  removePhoto(index) {
    if (this.gallery.photos.length > 0) {
      this.gallery.photos.splice(index, 1);
    }
  }
   

}
