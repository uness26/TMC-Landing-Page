import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PopupService } from '../../popup-service';
import { Web3Provider } from '@ethersproject/providers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.scss'],
})
export class ConnectWalletComponent implements OnInit, OnDestroy {
  popupId = 'connectWallet';
  nextPopupId = 'twitter';
  popupVisible: boolean | undefined;
  nextPopupVisible: boolean = false;
  enabled: boolean = true;

  popupVisibleSubscription: Subscription | undefined;

  constructor(private popupService: PopupService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.popupVisible = this.popupService.getPopupVisibility(this.popupId);
    this.popupVisibleSubscription = this.popupService.popupVisibilityChanged.subscribe((popupId: string) => {
      if (popupId === this.nextPopupId) {
        this.nextPopupVisible = this.popupService.getPopupVisibility(this.nextPopupId);
        this.cdr.detectChanges();
      }
    });
    console.log(this.popupVisible)
    console.log(this.nextPopupVisible)
  }

  ngOnDestroy(): void {
    if (this.popupVisibleSubscription) {
      this.popupVisibleSubscription.unsubscribe();
    }
  }

  closePopup(): void {
    this.popupService.hidePopup(this.popupId);
    this.popupVisible = this.popupService.getPopupVisibility(this.popupId);
  }

  showNextPopup(): void {
        this.popupService.showNextPopup(this.popupId, this.nextPopupId);
  }

  async connectWallet() {
    if ((window as any).ethereum) {
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      try {
        const provider = new Web3Provider((window as any).ethereum);
        const signer = provider.getSigner();
        alert('Wallet Connected');
        this.enabled = false;
        this.cdr.detectChanges();
        console.log('Connected to MetaMask');
      } catch (error) {
        alert('Error connecting to Wallet');
        this.enabled = true;
        this.cdr.detectChanges();
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('Please install MetaMask');
      this.enabled = true;
      this.cdr.detectChanges();
      console.error('MetaMask is not installed');
    }
  }
}
