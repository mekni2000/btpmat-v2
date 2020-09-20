import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPartenaireComponent } from './carousel-partenaire.component';

describe('CarouselPartenaireComponent', () => {
  let component: CarouselPartenaireComponent;
  let fixture: ComponentFixture<CarouselPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
