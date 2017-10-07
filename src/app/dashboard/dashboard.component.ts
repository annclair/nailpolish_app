import { Component, OnInit } from '@angular/core';

import { NailpolishService } from './../nailpolish.service'
import { Nailpolish } from './../nailpolish';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private nailpolishService: NailpolishService) { }

  ngOnInit() {
    this.getNailpolishs();
    this.getLastNailpolishs();
  }

  nailpolishs: Nailpolish[];
  lastnailpolishs: Nailpolish[];

  getNailpolishs(): void {
    this.nailpolishService
      .getNailpolishs()
      .then(nailpolishs =>
        this.nailpolishs = nailpolishs
      );
  }

  getLastNailpolishs(): void {
    this.nailpolishService
      .getNailpolishs()
      .then(nailpolishs =>
        this.lastnailpolishs = nailpolishs.reverse().slice(1, 5)
      );
  }
}
