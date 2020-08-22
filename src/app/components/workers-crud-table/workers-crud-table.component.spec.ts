import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCrudTableComponent } from './workers-crud-table.component';

describe('WorkersCrudTableComponent', () => {
  let component: WorkersCrudTableComponent;
  let fixture: ComponentFixture<WorkersCrudTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersCrudTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
