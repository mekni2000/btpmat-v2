import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMarqueComponent } from './carousel-marque.component';

describe('CarouselMarqueComponent', () => {
  let component: CarouselMarqueComponent;
  let fixture: ComponentFixture<CarouselMarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselMarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
