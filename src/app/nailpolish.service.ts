import { Injectable } from '@angular/core';

import { Nailpolish } from './nailpolish';
import { NAILPOLISHS } from './mock-nailpolishs'

@Injectable()
export class NailpolishService {

  constructor() { }

  getNailpolishs(): Promise<Nailpolish[]> {
    return Promise.resolve(NAILPOLISHS)
   }
}
