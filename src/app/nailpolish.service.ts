import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Nailpolish } from './nailpolish';

@Injectable()
export class NailpolishService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private nailpolishsUrl = 'http://localhost:4000/api/nailpolishs';

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

  create(nailpolish: Nailpolish): Promise<Nailpolish> {
    return this.http
      .post(this.nailpolishsUrl, nailpolish, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Nailpolish)
      .catch(this.handleError);
  }

  update(nailpolish: Nailpolish, id: string): Promise<Nailpolish> {
    const url = `${this.nailpolishsUrl}/${id}`;
    return this.http
      .put(url, nailpolish, { headers: this.headers })
      .toPromise()
      .then(() => nailpolish)
      .catch(this.handleError);
  }
  
  delete(id: string): Promise<void> {
    const url = `${this.nailpolishsUrl}/${id}`;
    return this.http
          .delete(url, { headers: this.headers })
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}