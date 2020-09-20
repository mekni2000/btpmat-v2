import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProComponent } from './login-pro.component';

describe('LoginProComponent', () => {
  let component: LoginProComponent;
  let fixture: ComponentFixture<LoginProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
