import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterParticulierComponent } from './register-particulier.component';

describe('RegisterParticulierComponent', () => {
  let component: RegisterParticulierComponent;
  let fixture: ComponentFixture<RegisterParticulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterParticulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
