/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcademiaComponent } from './academia.component';

describe('AcademiaComponent', () => {
  let component: AcademiaComponent;
  let fixture: ComponentFixture<AcademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
