import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppException } from '../common/exceptions/app.exception';
import { NotFoundException } from '../common/exceptions/notfound.exception';
import { BadRequestException } from '../common/exceptions/badRequest.exception';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }


  getPosts() {
    return this.httpClient.get(this.url);
  }

  createPost(post: string) {
     return  this.httpClient.post(this.url, post);
  }

  updatePost(postToUpdate:  any) {
    return this.httpClient
    .patch(this.url+'/'+postToUpdate['id'], JSON.stringify({isRead : true}))
    .pipe(
      map(data =>  {
        return data;
      }),
      catchError((error: HttpErrorResponse) =>  {
        if (error.status === 400) {
           throw(new BadRequestException(error))
        }else  {
          throw(new AppException(error));
        }
      })
    );
  }

  deletePost(postId) {
    return this.httpClient.delete(this.url+'/'+345)
    .pipe(
      map(data => {
        return data;
      }),
      catchError((error:HttpErrorResponse) => {
        if  (error.status === 404)  {
          throw(new NotFoundException(error));
        }
        throw(new AppException(error));
      })
    );
  }

  
}
