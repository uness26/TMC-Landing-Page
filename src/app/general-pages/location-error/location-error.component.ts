import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-location-error',
  templateUrl: './location-error.component.html',
  styleUrls: ['./location-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
