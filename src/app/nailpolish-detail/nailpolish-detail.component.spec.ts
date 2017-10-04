import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailpolishDetailComponent } from './nailpolish-detail.component';

describe('NailpolishDetailComponent', () => {
  let component: NailpolishDetailComponent;
  let fixture: ComponentFixture<NailpolishDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailpolishDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailpolishDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
