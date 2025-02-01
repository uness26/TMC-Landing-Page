import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordPopupComponent } from './discord-popup.component';

describe('DiscordPopupComponent', () => {
  let component: DiscordPopupComponent;
  let fixture: ComponentFixture<DiscordPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
