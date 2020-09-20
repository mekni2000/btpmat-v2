import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieKaisserComponent } from './categorie-kaisser.component';

describe('CategorieKaisserComponent', () => {
  let component: CategorieKaisserComponent;
  let fixture: ComponentFixture<CategorieKaisserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieKaisserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieKaisserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
