import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenaireDestockageComponent } from './partenaire-destockage.component';

describe('PartenaireDestockageComponent', () => {
  let component: PartenaireDestockageComponent;
  let fixture: ComponentFixture<PartenaireDestockageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenaireDestockageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenaireDestockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
