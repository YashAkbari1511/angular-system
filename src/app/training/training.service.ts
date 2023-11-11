import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/services/http.service';
import { Entries } from './observables/user-observable';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private httpService: HttpService,
  ) { }

  getJoke() {
    return this.httpService.get('https://official-joke-api.appspot.com/random_joke');
  }
  getRandomUser() {
    return this.httpService.get('https://randomuser.me/api/');
  }
  getEntries() : Observable<Entries[]> {
    return this.httpService.get('https://api.publicapis.org/entries');
  }
}
