import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisEnCoursComponent } from './devis-en-cours.component';

describe('DevisEnCoursComponent', () => {
  let component: DevisEnCoursComponent;
  let fixture: ComponentFixture<DevisEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
