import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMarqueDestockageComponent } from './carousel-marque-destockage.component';

describe('CarouselMarqueDestockageComponent', () => {
  let component: CarouselMarqueDestockageComponent;
  let fixture: ComponentFixture<CarouselMarqueDestockageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselMarqueDestockageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMarqueDestockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
