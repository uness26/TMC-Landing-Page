import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PopupService } from '../../popup-service';

@Component({
  selector: 'app-github-popup',
  templateUrl: './github-popup.component.html',
  styleUrls: ['./github-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubPopupComponent implements OnInit{
  popupId = 'github';
  popupVisible: boolean = false;
  previousPopupId = 'telegram';
  previousPopupVisible: boolean = false;
  nextPopupId = 'Done';
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

  followGithub(): void {
    window.open('https://github.com', '_blank');
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
