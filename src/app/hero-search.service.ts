import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Hero} from './hero';
import {Injectable} from '@angular/core';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {

  }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`api/heroes/?name=${term}`)
      .map( response => response.json().data as Hero[]);
  }


}

