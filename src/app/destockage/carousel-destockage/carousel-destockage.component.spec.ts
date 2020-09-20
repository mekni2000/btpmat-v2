import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDestockageComponent } from './carousel-destockage.component';

describe('CarouselDestockageComponent', () => {
  let component: CarouselDestockageComponent;
  let fixture: ComponentFixture<CarouselDestockageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselDestockageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselDestockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
