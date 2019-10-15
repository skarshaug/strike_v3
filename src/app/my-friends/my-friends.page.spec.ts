import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFriendsPage } from './my-friends.page';

describe('MyFriendsPage', () => {
  let component: MyFriendsPage;
  let fixture: ComponentFixture<MyFriendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFriendsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
