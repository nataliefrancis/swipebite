import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPicComponent } from './foodPic.component';

describe('FoodPicComponent', () => {
  let component: FoodPicComponent;
  let fixture: ComponentFixture<FoodPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
