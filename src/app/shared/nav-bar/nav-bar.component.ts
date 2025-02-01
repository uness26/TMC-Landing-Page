import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  activeNav: string = '#'; 

  constructor(private elRef: ElementRef) { }

  setActiveNav(nav: string) {
    this.activeNav = nav;
  }

}
