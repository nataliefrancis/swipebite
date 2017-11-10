import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthCardComponent } from './fourth-card.component';

describe('FourthCardComponent', () => {
  let component: FourthCardComponent;
  let fixture: ComponentFixture<FourthCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
