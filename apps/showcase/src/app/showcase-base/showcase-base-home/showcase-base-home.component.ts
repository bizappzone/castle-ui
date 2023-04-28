import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'baz-showcase-base-home',
  templateUrl: './showcase-base-home.component.html',
  styleUrls: ['./showcase-base-home.component.scss'],
})
export class ShowcaseBaseHomeComponent implements OnInit {
  constructor(private logger: NGXLogger) {}

  ngOnInit(): void {
    this.logger.trace('**** DS - button view');
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick(value: any) {
    this.logger.trace('$$$ BUTTON CLICKED $$$'), value;
  }
}
