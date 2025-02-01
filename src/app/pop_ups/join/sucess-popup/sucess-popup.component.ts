import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PopupService } from '../../popup-service';

@Component({
  selector: 'app-sucess-popup',
  templateUrl: './sucess-popup.component.html',
  styleUrls: ['./sucess-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SucessPopupComponent implements OnInit{
  popupId = 'Done';
  popupVisible: boolean = false;

  constructor(private popupService: PopupService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.popupVisible = this.popupService.getPopupVisibility(this.popupId);
    this.cdr.detectChanges();
  }

  closePopup(): void {
    this.popupService.hidePopup(this.popupId);
    this.popupVisible = false;
  }
}
