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
  
  modeEdit: boolean;

  ngOnInit(): void {
    this.modeEdit=false;
    this.route.paramMap
      .switchMap((params: ParamMap) => 
        this.nailpolishService.getNailpolish(params.get('id'))
      )
      .subscribe(nailpolish => {
        this.nailpolish = nailpolish
      });
  }

  edit(nailpolish): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.nailpolishService.update(nailpolish, params.get('id'))
      )
      .subscribe(nailpolish => {
        this.nailpolish = nailpolish;
        this.modeEditOff()
      });
  }

  delete(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.nailpolishService.delete(params.get('id'))
      )
      .subscribe(nailpolish => {
        this.goBack()
      });
  }

  goBack(): void {
    this.location.back();
  }

  modeEditOn(): void {
    this.modeEdit = true;
  }
  modeEditOff(): void {
    this.modeEdit = false;
  }
}