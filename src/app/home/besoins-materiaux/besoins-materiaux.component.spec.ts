import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinsMateriauxComponent } from './besoins-materiaux.component';

describe('BesoinsMateriauxComponent', () => {
  let component: BesoinsMateriauxComponent;
  let fixture: ComponentFixture<BesoinsMateriauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BesoinsMateriauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BesoinsMateriauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
