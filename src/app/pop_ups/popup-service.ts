import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupVisibilityMap: Map<string, boolean> = new Map();
  popupVisibilityChanged: Subject<string> = new Subject<string>();

  constructor() {}
  getPopupVisibility(popupId: string): boolean {
    return this.popupVisibilityMap.get(popupId) || false;
  }

  showPopup(popupId: string): void {
    this.popupVisibilityMap.set(popupId, true);
    this.showBackdrop();
    console.log('Map', this.popupVisibilityMap)
    this.popupVisibilityChanged.next(popupId);
  }

  hidePopup(popupId: string): void {
    this.popupVisibilityMap.set(popupId, false);
    this.hideBackdrop();
    console.log('Map', this.popupVisibilityMap)
    this.popupVisibilityChanged.next(popupId);
  }

  showNextPopup(currentPopupId: string, nextPopupId: string): void {
    
    this.hidePopup(currentPopupId);
    this.showPopup(nextPopupId);

  }

  showPreviousPopup(currentPopupId: string, previousPopupId: string): void {
    this.hidePopup(currentPopupId);
    this.showPopup(previousPopupId);
  }

  private showBackdrop(): void {
    const backdrop = document.querySelector('.backdrop') as HTMLElement;
    if (backdrop) {
      backdrop.style.display = 'block';
    }
  }

  private hideBackdrop(): void {
    const backdrop = document.querySelector('.backdrop') as HTMLElement;
    if (backdrop) {
      backdrop.style.display = 'none';
    }
  }
}
