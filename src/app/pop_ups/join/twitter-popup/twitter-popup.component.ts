import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PopupService } from '../../popup-service';

@Component({
  selector: 'app-twitter-popup',
  templateUrl: './twitter-popup.component.html',
  styleUrls: ['./twitter-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwitterPopupComponent implements OnInit {
  popupId = 'twitter';
  popupVisible: boolean = false;
  previousPopupId = 'connectWallet';
  previousPopupVisible: boolean = false;
  nextPopupId = 'discord';
  nextPopupVisible: boolean = false;
  enabled: boolean = true;

  constructor(private popupService: PopupService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.updateVisibilityStates()
  }

  showPreviousPopup(): void {
    this.previousPopupVisible = true;
    this.popupService.showPreviousPopup(this.popupId, this.previousPopupId);
    this.updateVisibilityStates();
  }

  showNextPopup(): void {
    this.popupService.showNextPopup(this.popupId, this.nextPopupId);
    this.updateVisibilityStates();
  }

  followTwitter(): void {
    window.open('https://twitter.com', '_blank');
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
