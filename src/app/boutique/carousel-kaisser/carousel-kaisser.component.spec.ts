import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselKaisserComponent } from './carousel-kaisser.component';

describe('CarouselKaisserComponent', () => {
  let component: CarouselKaisserComponent;
  let fixture: ComponentFixture<CarouselKaisserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselKaisserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselKaisserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
