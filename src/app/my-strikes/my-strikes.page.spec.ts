import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStrikesPage } from './my-strikes.page';

describe('MyStrikesPage', () => {
  let component: MyStrikesPage;
  let fixture: ComponentFixture<MyStrikesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStrikesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStrikesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
