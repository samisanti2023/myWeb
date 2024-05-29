/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AjedrezComponent } from './ajedrez.component';

describe('AjedrezComponent', () => {
  let component: AjedrezComponent;
  let fixture: ComponentFixture<AjedrezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjedrezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjedrezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
