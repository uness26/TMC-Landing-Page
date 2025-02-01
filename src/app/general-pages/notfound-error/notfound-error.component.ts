import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notfound-error',
  templateUrl: './notfound-error.component.html',
  styleUrls: ['./notfound-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotfoundErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
