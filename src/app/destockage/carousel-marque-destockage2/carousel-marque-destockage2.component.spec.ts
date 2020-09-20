import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMarqueDestockage2Component } from './carousel-marque-destockage2.component';

describe('CarouselMarqueDestockage2Component', () => {
  let component: CarouselMarqueDestockage2Component;
  let fixture: ComponentFixture<CarouselMarqueDestockage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselMarqueDestockage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMarqueDestockage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
