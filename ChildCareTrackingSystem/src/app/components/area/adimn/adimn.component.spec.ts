import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdimnComponent } from './adimn.component';

describe('AdimnComponent', () => {
  let component: AdimnComponent;
  let fixture: ComponentFixture<AdimnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdimnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdimnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
