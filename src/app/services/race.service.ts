import { Injectable } from '@angular/core';
import Poney from '../interfaces/poney';
import { Race } from '../interfaces/race';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RaceService {

  ponies: Poney[] = []

  races: Race[] = []

  constructor(private http: HttpClient) {}

  getPonies(): Observable<Poney[]> {
    let ponies$: Observable<Poney[]>

    if (this.ponies.length) {
      ponies$ = new Observable((observer) => {
        observer.next(this.ponies)
      }).map(ponies => <Poney[]>ponies)
    } else {
      ponies$ = this.http.get('http://localhost:3000/ponies').map(data => <Poney[]>data)
    }

    return ponies$
  }

  getRaces(): Observable<Race[]> {
    let races$: Observable<Race[]>

    if (this.races.length) {
      races$ = new Observable((observer) => {
        observer.next(this.races)
      }).map(races => <Race[]>races)
    } else {
      races$ = this.http.get('http://localhost:3000/races').map(data => <Race[]>data)
    }

    return races$
  }

  getRace(id: number): Observable<Race> {
    return this.getRaces().map(races => {
      return races.find(race => race.id == id)
    })
  }

  resetPonies() {
    if (this.ponies && this.ponies.length) {
      this.ponies.forEach(poney => {
        poney.distance = 0
      })
    }
  }
}
