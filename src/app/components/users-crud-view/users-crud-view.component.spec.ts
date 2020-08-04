import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCrudViewComponent } from './users-crud-view.component';

describe('UsersCrudViewComponent', () => {
  let component: UsersCrudViewComponent;
  let fixture: ComponentFixture<UsersCrudViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCrudViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCrudViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
