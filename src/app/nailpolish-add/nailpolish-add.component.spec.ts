import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailpolishAddComponent } from './nailpolish-add.component';

describe('NailpolishAddComponent', () => {
  let component: NailpolishAddComponent;
  let fixture: ComponentFixture<NailpolishAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailpolishAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailpolishAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
