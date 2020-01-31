import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JokesService {

  constructor(private httpClient: HttpClient) { }


  getJokes() : Observable<any> {

    let url = 'https://api.chucknorris.io/jokes/random';
    return this.httpClient.get(url);
  }
}
