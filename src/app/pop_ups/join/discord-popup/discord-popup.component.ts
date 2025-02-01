import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PopupService } from '../../popup-service';

@Component({
  selector: 'app-discord-popup',
  templateUrl: './discord-popup.component.html',
  styleUrls: ['./discord-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscordPopupComponent implements OnInit{
  popupId = 'discord';
  popupVisible: boolean = false;
  previousPopupId = 'twitter';
  previousPopupVisible: boolean = false;
  nextPopupId = 'telegram';
  nextPopupVisible: boolean = false;
  enabled: boolean = true;

  constructor(private popupService: PopupService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.updateVisibilityStates();
  }

  showPreviousPopup(): void {
    this.popupService.showPreviousPopup(this.popupId, this.previousPopupId);
    this.updateVisibilityStates();
  }

  showNextPopup(): void {
    this.popupService.showNextPopup(this.popupId, this.nextPopupId);
    this.updateVisibilityStates();
  }

  followDiscord(): void {
    window.open('https://discord.com', '_blank');
    this.enabled = false;
    this.cdr.detectChanges();
  }

  private updateVisibilityStates(): void {
    this.popupVisible = this.popupService.getPopupVisibility(this.popupId);
    this.previousPopupVisible = this.popupService.getPopupVisibility(this.previousPopupId);
    this.nextPopupVisible = this.popupService.getPopupVisibility(this.nextPopupId);
    this.cdr.detectChanges();
  }
}
