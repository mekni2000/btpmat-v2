import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousNavComponent } from './sous-nav.component';

describe('SousNavComponent', () => {
  let component: SousNavComponent;
  let fixture: ComponentFixture<SousNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
