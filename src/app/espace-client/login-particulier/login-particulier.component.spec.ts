import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginParticulierComponent } from './login-particulier.component';

describe('LoginParticulierComponent', () => {
  let component: LoginParticulierComponent;
  let fixture: ComponentFixture<LoginParticulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginParticulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
