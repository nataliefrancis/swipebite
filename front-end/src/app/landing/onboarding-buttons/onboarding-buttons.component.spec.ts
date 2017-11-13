import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingButtonsComponent } from './onboarding-buttons.component';

describe('OnboardingButtonsComponent', () => {
  let component: OnboardingButtonsComponent;
  let fixture: ComponentFixture<OnboardingButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
