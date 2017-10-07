import { Injectable } from '@angular/core';

import { Nailpolish } from './nailpolish';
import { NAILPOLISHS } from './mock-nailpolishs'

@Injectable()
export class NailpolishService {

  constructor() { }

  getNailpolishs(): Promise<Nailpolish[]> {
    return Promise.resolve(NAILPOLISHS)
  }

  getNailpolish(id: number): Promise<Nailpolish> {
    return this.getNailpolishs()
        .then(nailpolishs =>
           nailpolishs.find(nailpolish => 
            nailpolish.id === id
          )
        );
  }
}
