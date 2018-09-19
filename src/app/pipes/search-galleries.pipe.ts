import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchGalleries'
})
export class SearchGalleriesPipe implements PipeTransform {

    galleries: any;

  transform(value: any, args?: any): any {
        // console.log(value);
        // console.log(args);

        this.galleries = value;

        if (args) {
            this.galleries = this.galleries.filter(item =>
                (item.title.indexOf(args) !== -1 || item.description.indexOf(args) !== -1));
        } else {
            this.galleries = value;
        }

        return this.galleries;
  }

}
