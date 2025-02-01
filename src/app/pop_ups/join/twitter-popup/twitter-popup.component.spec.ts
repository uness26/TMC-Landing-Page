import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterPopupComponent } from './twitter-popup.component';

describe('TwitterPopupComponent', () => {
  let component: TwitterPopupComponent;
  let fixture: ComponentFixture<TwitterPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
