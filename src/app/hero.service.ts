import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class HeroService {
  heroesUrl = 'api/heroes';

  constructor(private http: Http) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: Number): Observable<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}
