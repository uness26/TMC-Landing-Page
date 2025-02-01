import { Component, OnInit, ChangeDetectionStrategy ,HostListener, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    navbar.classList.toggle('collapsed');
    this.isMenuOpen = !this.isMenuOpen;

  }
}
