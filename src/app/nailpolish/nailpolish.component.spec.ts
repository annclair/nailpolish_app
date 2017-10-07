import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailpolishComponent } from './nailpolish.component';

describe('NailpolishComponent', () => {
  let component: NailpolishComponent;
  let fixture: ComponentFixture<NailpolishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailpolishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailpolishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
