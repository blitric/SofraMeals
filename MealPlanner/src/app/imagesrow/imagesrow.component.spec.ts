import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesrowComponent } from './imagesrow.component';

describe('ImagesrowComponent', () => {
  let component: ImagesrowComponent;
  let fixture: ComponentFixture<ImagesrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
