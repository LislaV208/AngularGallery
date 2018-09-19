import { Component, OnInit } from '@angular/core';
import GALLERY from '../../constants/galleries';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    galleries: any;

  constructor() {
      this.galleries = GALLERY;
    }

  ngOnInit() {
  }

}
