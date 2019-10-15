import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFriendsPage } from './add-new-friends.page';

describe('AddNewFriendsPage', () => {
  let component: AddNewFriendsPage;
  let fixture: ComponentFixture<AddNewFriendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewFriendsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewFriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
