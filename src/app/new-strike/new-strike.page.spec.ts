import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStrikePage } from './new-strike.page';

describe('NewStrikePage', () => {
  let component: NewStrikePage;
  let fixture: ComponentFixture<NewStrikePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStrikePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStrikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
