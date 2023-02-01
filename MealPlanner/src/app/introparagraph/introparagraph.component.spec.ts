import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroparagraphComponent } from './introparagraph.component';

describe('IntroparagraphComponent', () => {
  let component: IntroparagraphComponent;
  let fixture: ComponentFixture<IntroparagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroparagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroparagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
