import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PopupService } from '../../popup-service';

@Component({
  selector: 'app-telegram-popup',
  templateUrl: './telegram-popup.component.html',
  styleUrls: ['./telegram-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelegramPopupComponent implements OnInit{
  popupId = 'telegram';
  popupVisible: boolean = false;
  previousPopupId = 'discord';
  previousPopupVisible: boolean = false;
  nextPopupId = 'github';
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

  followTelegram(): void {
    window.open('https://telegram.org/', '_blank');
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
