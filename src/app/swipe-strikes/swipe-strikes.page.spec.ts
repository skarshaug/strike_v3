import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeStrikesPage } from './swipe-strikes.page';

describe('SwipeStrikesPage', () => {
  let component: SwipeStrikesPage;
  let fixture: ComponentFixture<SwipeStrikesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipeStrikesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeStrikesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
