import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { NailpolishService } from './../nailpolish.service'
import { Nailpolish } from './../nailpolish'

@Component({
  selector: 'app-nailpolish-detail',
  templateUrl: './nailpolish-detail.component.html',
  styleUrls: ['./nailpolish-detail.component.css']
})

export class NailpolishDetailComponent implements OnInit {
  @Input() nailpolish: Nailpolish;
  constructor(
    private nailpolishService: NailpolishService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => 
        this.nailpolishService.getNailpolish(params.get('id'))
      )
      .subscribe(nailpolish => {
        this.nailpolish = nailpolish
      });
  }
  
  goBack(): void {
    this.location.back();
  }
}