import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { IconNameType } from '../types/base-iconTypes';
import {
  DisplayClassType,
  DisplayType,
  BtnModeType,
  AlignType,
  SizeType,
  RadiusSizeType,
  btnType,
} from '../types/baseTypes';

@Component({
  selector: 'baz-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() btnId = '';
  @Input() btnLable = '';
  @Input() displayClass: DisplayClassType = 'primary';
  @Input() displayType: DisplayType = 'flat';
  @Input() btnMode: BtnModeType = 'click';
  @Input() btnHelp?: string;
  @Input() badgeLable? = '';
  @Input() badgeDisplayClass? = '';
  @Input() badgeAlign: AlignType = 'inline';
  @Input() iconDisplayClass?: DisplayClassType;
  @Input() iconDisplayType?: DisplayType;
  @Input() iconLeft?: IconNameType;
  @Input() iconRight?: IconNameType;
  @Input() btnSize: SizeType = 'med';
  @Input() btnRadius: RadiusSizeType = 'med';
  @Input() disabled = false;
  @Input() type: btnType = 'button';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  public finalClassApplied = '';
  iconId = this.btnId + '-icon';
  _iconDisplayClass: DisplayClassType = '';
  _iconDisplayType: DisplayType = '';
  constructor(private logger: NGXLogger) {}

  ngOnInit(): void {
    this.logger.trace('**** Button Component');
    this.assignClasses(
      this.displayClass,
      this.displayType,
      this.btnSize,
      this.btnRadius,
      this.badgeAlign
    );
  }

  ngOnChanges(): void {
    this.assignClasses(
      this.displayClass,
      this.displayType,
      this.btnSize,
      this.btnRadius,
      this.badgeAlign
    );
  }

  assignClasses(
    btnDisplay: string,
    btnType: string,
    btnsize: string,
    btnradius: string,
    badgeAlign: string
  ) {
    const disClass = 'btn-' + btnDisplay + ' btn-' + btnDisplay + '-' + btnType; // btn-primary btn-primary-outline
    let sizeClass = '';
    let radiusSize = '';
    let badgetop = '';

    // Mappings for icons
    if (this.iconDisplayClass) {
      this._iconDisplayClass = this.iconDisplayClass;
    } else {
      this._iconDisplayClass = this.displayClass;
    }
    if (this.iconDisplayType) {
      this._iconDisplayType = this.iconDisplayType;
    } else {
      this._iconDisplayType = this.displayType;
    }

    if (btnsize === 'xsmall') {
      sizeClass = 'text-xs px-1 py-1 ';
    }
    if (btnsize === 'small') {
      sizeClass = 'text-xs px-3 py-2 ';
    }
    if (btnsize === 'med') {
      sizeClass = 'text-base px-5 py-2.5';
    }
    if (btnsize === 'large') {
      sizeClass = 'text-lg px-5 py-2.5';
    }
    if (btnradius === 'small') {
      radiusSize = 'rounded-md';
    }
    if (btnradius === 'med') {
      radiusSize = 'rounded-lg ';
    }
    if (btnradius === 'large') {
      radiusSize = 'rounded-full';
    }
    if (badgeAlign === 'top') {
      badgetop = '';
    }

    const finalClass =
      disClass + ' ' + sizeClass + ' ' + radiusSize + ' ' + badgeAlign;
    this.finalClassApplied = finalClass;
  }

  click() {
    this.btnClick.emit(this.btnId);
  }
}
