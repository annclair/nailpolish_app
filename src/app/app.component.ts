import { Component, OnInit } from '@angular/core';

import { NailpolishService } from './nailpolish.service'
import { Nailpolish } from './nailpolish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NailpolishService]
})
export class AppComponent implements OnInit {
  constructor(
    private nailpolishService: NailpolishService
  ){}

  ngOnInit(): void {
    this.getNailpolishs();
  }

  title = 'My nail polishs collection';
  nailpolishs: Nailpolish[];

  selectedNailpolish: Nailpolish;

  getNailpolishs(): void {
    this.nailpolishService
      .getNailpolishs()
      .then(nailpolishs => 
        this.nailpolishs = nailpolishs
      );
  }

  onSelect(nailpolish: Nailpolish): void {
    this.selectedNailpolish = nailpolish;
  }

}
