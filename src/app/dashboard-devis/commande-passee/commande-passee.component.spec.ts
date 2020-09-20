import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandePasseeComponent } from './commande-passee.component';

describe('CommandePasseeComponent', () => {
  let component: CommandePasseeComponent;
  let fixture: ComponentFixture<CommandePasseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandePasseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandePasseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
