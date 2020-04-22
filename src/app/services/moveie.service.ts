import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { error } from 'protractor';
import { inflate, deflate, gzip } from 'pako';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'   
}
@Injectable({
  providedIn: 'root'
})
export class MoveieService {
  url = 'http://www.omdbapi.com/';
  apiKey = '2be398c0'

  constructor( private httpClient: HttpClient ) { }

  getSpecialHeaders() {
    return new HttpHeaders({
      'Accept-Encoding': 'gzip, deflate'
    });
}


  searchData(title: string, type: SearchType): Observable<any> {
    const headersSpl = this.getSpecialHeaders();
    const httpHeaders = {
      headers : headersSpl
    };
    
    let reqParam = {
      s:encodeURI(title),
      type:type,
      apiKey:this.apiKey
    }
    console.log("Original reqparam ", reqParam);

    let binaryString = deflate(JSON.stringify(reqParam), {to : 'string'});
    console.log("deflate reqparam:: binary string ", binaryString );

    let gzipReq = gzip(JSON.stringify(reqParam));
    console.log("GZIP ", gzipReq);

    let restored = JSON.parse(inflate(binaryString, { to: 'string' }));
    console.log("inflateReq ", restored);

    

    const httpOptions = {
      params: reqParam,
      
    };
  
    return this.httpClient.get(`${this.url}`,httpOptions )
    .pipe(
      map( results => results['Search']),
      tap(console),
      catchError( error => { console.log(error); return EMPTY })
    );
  }

  getDetails(id) {
    return this.httpClient.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);
  }
}
