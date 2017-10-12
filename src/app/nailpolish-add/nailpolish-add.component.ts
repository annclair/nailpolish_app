import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


import { Nailpolish } from './../nailpolish'
import { NailpolishService } from './../nailpolish.service'

@Component({
  selector: 'app-nailpolish-add',
  templateUrl: './nailpolish-add.component.html',
  styleUrls: ['./nailpolish-add.component.css']
})
export class NailpolishAddComponent implements OnInit {

  constructor(
    private nailpolishService: NailpolishService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  nailpolishs: Nailpolish[] = [];
  nailpolish: Nailpolish;

  add(nailpolish: Nailpolish): void {
    this.nailpolishService.create(nailpolish)
      .then(nailpolish => {
        this.nailpolishs.push(nailpolish);
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
}
