import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravauxAluminiumComponent } from './travaux-aluminium.component';

describe('TravauxAluminiumComponent', () => {
  let component: TravauxAluminiumComponent;
  let fixture: ComponentFixture<TravauxAluminiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravauxAluminiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravauxAluminiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
