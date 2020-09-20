import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilledComponent } from './skilled.component';

describe('SkilledComponent', () => {
  let component: SkilledComponent;
  let fixture: ComponentFixture<SkilledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
