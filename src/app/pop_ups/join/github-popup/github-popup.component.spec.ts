import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPopupComponent } from './github-popup.component';

describe('GithubPopupComponent', () => {
  let component: GithubPopupComponent;
  let fixture: ComponentFixture<GithubPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
