import { Component, OnInit } from '@angular/core';

import { NailpolishService } from './../nailpolish.service'
import { Nailpolish } from './../nailpolish';

@Component({
  selector: 'app-nailpolish',
  templateUrl: './nailpolish.component.html',
  styleUrls: ['./nailpolish.component.css']
})

export class NailpolishComponent implements OnInit {

  constructor(private nailpolishService: NailpolishService) { }

  ngOnInit(): void {
    this.getNailpolishs();
  }
 
  nailpolishs: Nailpolish[];

  getNailpolishs(): void {
    this.nailpolishService
      .getNailpolishs()
      .then(nailpolishs =>
        this.nailpolishs = nailpolishs
      );
  }

}