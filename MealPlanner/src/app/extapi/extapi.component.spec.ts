import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtapiComponent } from './extapi.component';

describe('ExtapiComponent', () => {
  let component: ExtapiComponent;
  let fixture: ComponentFixture<ExtapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
