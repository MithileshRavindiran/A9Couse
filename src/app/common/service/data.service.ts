import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,map } from "rxjs/operators";
import { NotFoundException } from '../exceptions/notfound.exception';
import { AppException } from '../exceptions/app.exception';
import {combineLatest}  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient, @Inject(String) private url: string) { 

  }


  getResource(name?: string, appender?:string) {
    let finalUrl:  string = null;
    console.log(this.url);
    if(name == null) {
      finalUrl = this.url+'mosh-hamedani';
    }else {
    finalUrl  = this.url+name;
    }

    if(appender != null) {
      finalUrl += appender;
    }
    console.log('finalUrl'+ finalUrl);
    return this.httpClient
    .get(finalUrl)
    .pipe(
      map(response => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status  === 404) {
          throw (new NotFoundException(error));
        }else  
        throw (new AppException(error));
      })  
    );
  }
}
