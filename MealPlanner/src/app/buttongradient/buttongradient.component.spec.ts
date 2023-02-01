import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtongradientComponent } from './buttongradient.component';

describe('ButtongradientComponent', () => {
  let component: ButtongradientComponent;
  let fixture: ComponentFixture<ButtongradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtongradientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtongradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
