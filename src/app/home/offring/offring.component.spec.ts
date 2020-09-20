import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffringComponent } from './offring.component';

describe('OffringComponent', () => {
  let component: OffringComponent;
  let fixture: ComponentFixture<OffringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
