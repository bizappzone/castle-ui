import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'baz-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BadgeComponent implements OnInit {
  @Input() badgeId = '';
  @Input() inBadgeLable = '';
  @Input() inBadgePosition = '';
  @Input() inBadgeDisplayClass = '';

  public finalClassApplied = '';
  constructor(private logger: NGXLogger) {}

  ngOnInit(): void {
    this.logger.trace('**** Badge Component');
    this.assignClasses(this.inBadgeDisplayClass, this.inBadgePosition);
  }

  assignClasses(bdgClass: string, bdgPos: string) {
    this.finalClassApplied = 'badge-' + bdgClass + '-' + bdgPos;
    this.logger.trace(
      '**** Badge Component finalClassApplied',
      this.finalClassApplied
    );
  }
}
