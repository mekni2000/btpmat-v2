import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselStoreComponent } from './carousel-store.component';

describe('CarouselStoreComponent', () => {
  let component: CarouselStoreComponent;
  let fixture: ComponentFixture<CarouselStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
