import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieMarqueComponent } from './categorie-marque.component';

describe('CategorieMarqueComponent', () => {
  let component: CategorieMarqueComponent;
  let fixture: ComponentFixture<CategorieMarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieMarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
