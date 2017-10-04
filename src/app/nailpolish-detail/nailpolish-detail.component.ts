import { Component, Input, OnInit } from '@angular/core';

import { Nailpolish } from './../nailpolish'

@Component({
  selector: 'app-nailpolish-detail',
  templateUrl: './nailpolish-detail.component.html',
  styleUrls: ['./nailpolish-detail.component.css']
})
export class NailpolishDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() nailpolish: Nailpolish;
}
