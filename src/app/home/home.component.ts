import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PopupService } from '../pop_ups/popup-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  buyTokenPopupVisible: boolean = false;

  constructor(private popupService: PopupService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.popupService.popupVisibilityChanged.subscribe((popupId: string) => {
      if (popupId === 'buyToken') {
        this.buyTokenPopupVisible = this.popupService.getPopupVisibility('buyToken');
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.popupService.popupVisibilityChanged.unsubscribe();
  }

  showBuyTokenPopup(): void {
    this.buyTokenPopupVisible = true;
    this.popupService.showPopup('buyToken');
  }
}
