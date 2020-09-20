import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieDestockageComponent } from './categorie-destockage.component';

describe('CategorieDestockageComponent', () => {
  let component: CategorieDestockageComponent;
  let fixture: ComponentFixture<CategorieDestockageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieDestockageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieDestockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
