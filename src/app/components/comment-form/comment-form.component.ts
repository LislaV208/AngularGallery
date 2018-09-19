import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../../interfaces/icomment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input() galleryId: string;

  comment: IComment;
  comments: IComment[] = [];
  // currentGalleryComments: IComment[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '31'
      })     
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://project.usagi.pl/comment/byGallery/' + this.galleryId, this.httpOptions).toPromise().then((response) => {
        for (let index in response) {
          let comment = response[index];
          this.comments.push(comment);
        }
      });

    this.comment = this.setEmptyComment();
    // this.comments = JSON.parse(localStorage.getItem('comments'));
    // if (this.comments == null) {
    //   this.comments = [];
    // }

    // this.currentGalleryComments = this.comments.filter(function(value) {
    //   return value.galleryId == this.galleryId;
    // }.bind(this));
  }

  onSubmit() {
    this.http.post('http://project.usagi.pl/comment', this.comment,
    this.httpOptions).toPromise().then((response) => {
      console.log('success', response);
      this.comments.push(this.comment);
      // this.currentGalleryComments.push(this.comment);
    }, (errResponse) => {
      console.log('error', errResponse);
    });
    
    // localStorage.setItem('comments', JSON.stringify(this.comments));
    this.comment = this.setEmptyComment();
  }

  deleteComment(commentId) {
    const index = this.comments.findIndex(item => item.commentId === commentId);
    this.http.post('http://project.usagi.pl/comment/delete/' + commentId, {}, this.httpOptions).toPromise().then(() => {
       this.comments.splice(index, 1);
       }, (errResponse) => {
       console.log('error', errResponse);
      });
  }

  private setEmptyComment() {

    return {
      galleryId: parseInt(this.galleryId),
      commentId: null,
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      dateCreated: new Date()
    };
  }

}
