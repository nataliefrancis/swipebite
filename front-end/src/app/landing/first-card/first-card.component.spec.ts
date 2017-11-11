import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCardComponent } from './first-card.component';

describe('FirstCardComponent', () => {
  let component: FirstCardComponent;
  let fixture: ComponentFixture<FirstCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
