import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselActualiteComponent } from './carousel-actualite.component';

describe('CarouselActualiteComponent', () => {
  let component: CarouselActualiteComponent;
  let fixture: ComponentFixture<CarouselActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
