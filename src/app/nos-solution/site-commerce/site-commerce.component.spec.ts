import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCommerceComponent } from './site-commerce.component';

describe('SiteCommerceComponent', () => {
  let component: SiteCommerceComponent;
  let fixture: ComponentFixture<SiteCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
