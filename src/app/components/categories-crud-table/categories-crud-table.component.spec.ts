import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCrudTableComponent } from './categories-crud-table.component';

describe('CategoriesCrudTableComponent', () => {
  let component: CategoriesCrudTableComponent;
  let fixture: ComponentFixture<CategoriesCrudTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesCrudTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
