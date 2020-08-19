import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroServidorComponent } from './registro-servidor.component';

describe('RegistroServidorComponent', () => {
  let component: RegistroServidorComponent;
  let fixture: ComponentFixture<RegistroServidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroServidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});