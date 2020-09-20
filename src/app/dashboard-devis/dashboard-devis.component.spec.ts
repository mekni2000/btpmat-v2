import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDevisComponent } from './dashboard-devis.component';

describe('DashboardDevisComponent', () => {
  let component: DashboardDevisComponent;
  let fixture: ComponentFixture<DashboardDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
