import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Nailpolish } from './nailpolish';

@Injectable()
export class NailpolishService {

  private nailpolishsUrl = 'http://localhost:4000/api/nailpolishs';  // URL to web api

  constructor(private http: Http) { }

  getNailpolishs(): Promise<Nailpolish[]> {
    return this.http.get(this.nailpolishsUrl)
      .toPromise()
      .then(response => {
        return response.json() as Nailpolish[]
      })
      .catch(this.handleError);
  }

  getNailpolish(id : string): Promise<Nailpolish> {
    const url = `${this.nailpolishsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json() as Nailpolish
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}