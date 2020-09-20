import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestockageComponent } from './destockage.component';

describe('DestockageComponent', () => {
  let component: DestockageComponent;
  let fixture: ComponentFixture<DestockageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestockageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
