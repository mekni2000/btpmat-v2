import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilProsComponent } from './conseil-pros.component';

describe('ConseilProsComponent', () => {
  let component: ConseilProsComponent;
  let fixture: ComponentFixture<ConseilProsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseilProsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseilProsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
