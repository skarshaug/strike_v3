import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikeDetailsPage } from './strike-details.page';

describe('StrikeDetailsPage', () => {
  let component: StrikeDetailsPage;
  let fixture: ComponentFixture<StrikeDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrikeDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrikeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
