import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymealsComponent } from './mymeals.component';

describe('MymealsComponent', () => {
  let component: MymealsComponent;
  let fixture: ComponentFixture<MymealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
