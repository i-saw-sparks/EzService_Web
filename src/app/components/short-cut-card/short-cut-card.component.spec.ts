import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCutCardComponent } from './short-cut-card.component';

describe('ShortCutCardComponent', () => {
  let component: ShortCutCardComponent;
  let fixture: ComponentFixture<ShortCutCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortCutCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortCutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
