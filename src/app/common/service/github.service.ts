import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { NotFoundException } from '../exceptions/notfound.exception';
import { AppException } from '../exceptions/app.exception';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService  extends DataService {
  
  constructor(httpClient: HttpClient) { 
    super(httpClient, 'https://api.github.com/users/');
  }


  getFollowers(name?: string) {
    return this.getResource(name, '/followers');
  }

  getUserInfo(name?: string) {
    return this.getResource(name);
  }

}
