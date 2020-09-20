import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresPromosComponent } from './offres-promos.component';

describe('OffresPromosComponent', () => {
  let component: OffresPromosComponent;
  let fixture: ComponentFixture<OffresPromosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresPromosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
