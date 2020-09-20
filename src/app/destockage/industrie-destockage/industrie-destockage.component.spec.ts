import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrieDestockageComponent } from './industrie-destockage.component';

describe('IndustrieDestockageComponent', () => {
  let component: IndustrieDestockageComponent;
  let fixture: ComponentFixture<IndustrieDestockageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrieDestockageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrieDestockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
