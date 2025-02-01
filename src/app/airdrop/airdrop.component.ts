import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PopupService } from '../pop_ups/popup-service';

@Component({
  selector: 'app-airdrop',
  templateUrl: './airdrop.component.html',
  styleUrls: ['./airdrop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AirdropComponent implements OnInit, OnDestroy {

  popupVisible: boolean = false;

  constructor(private popupService: PopupService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.popupService.popupVisibilityChanged.subscribe((popupId: string) => {
      if (popupId === 'connectWallet') {
        this.popupVisible = this.popupService.getPopupVisibility('connectWallet');
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.popupService.popupVisibilityChanged.unsubscribe();
  }

  showPopup(): void {
    this.popupVisible = true;
    this.popupService.showPopup('connectWallet');
  }
}
