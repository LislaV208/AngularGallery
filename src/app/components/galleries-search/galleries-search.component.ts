import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'galleries-search',
  templateUrl: './galleries-search.component.html',
  styleUrls: ['./galleries-search.component.scss']
})
export class GalleriesSearchComponent implements OnInit {

    @Output()
    searchValue: EventEmitter<String> = new EventEmitter<String>();

    public value: string;

  constructor() { }

  ngOnInit() {
      this.value = "";
  }

  onChange() {
      this.searchValue.emit(this.value);
      console.log(this.value);
    }

}
