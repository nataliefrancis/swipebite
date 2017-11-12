import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFoodComponent } from './main-food.component';

describe('MainFoodComponent', () => {
  let component: MainFoodComponent;
  let fixture: ComponentFixture<MainFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
