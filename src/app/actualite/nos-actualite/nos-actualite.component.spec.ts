import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosActualiteComponent } from './nos-actualite.component';

describe('NosActualiteComponent', () => {
  let component: NosActualiteComponent;
  let fixture: ComponentFixture<NosActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
