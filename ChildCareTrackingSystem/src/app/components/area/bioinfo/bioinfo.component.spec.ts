import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioinfoComponent } from './bioinfo.component';

describe('BioinfoComponent', () => {
  let component: BioinfoComponent;
  let fixture: ComponentFixture<BioinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
