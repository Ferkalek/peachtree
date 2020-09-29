import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ptb-design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
