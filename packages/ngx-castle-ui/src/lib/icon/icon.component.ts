import {
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { IconNameType } from '../types/base-iconTypes';
import {
  DisplayClassType,
  DisplayType,
  SizeType,
  RadiusSizeType,
  AlignType,
  UiEffectsType,
  UiEffectsAmountType,
} from '../types/baseTypes';

@Component({
  selector: 'baz-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent implements OnInit, OnChanges {
  public finalClassApplied = '';

  @Input() iconId = '';
  @Input() iconName: IconNameType = 'save';
  @Input() displayClass: DisplayClassType = 'none';
  @Input() displayType: DisplayType = 'basic';
  @Input() iconSize: SizeType = 'med';
  @Input() iconEffect?: UiEffectsType = 'none';
  @Input() iconEffectAmount?: UiEffectsAmountType = 'small';
  @Input() iconAlign: AlignType = 'left';
  @Input() iconRadius: RadiusSizeType = 'none';

  constructor(private logger: NGXLogger) {}

  ngOnInit(): void {
    this.logger.trace('**** Icon Component');

    this.assignClasses(
      this.displayClass,
      this.displayType,
      this.iconSize,
      this.iconAlign,
      this.iconRadius
    );
  }

  ngOnChanges(): void {
    this.assignClasses(
      this.displayClass,
      this.displayType,
      this.iconSize,
      this.iconAlign,
      this.iconRadius
    );
  }

  assignClasses(
    iconDisplay: string,
    iconType: string,
    iconSize: string,
    iconAlign: string,
    iconRadius: string
  ) {
    const disClass =
      'icon-' + iconDisplay + ' icon-' + iconDisplay + '-' + iconType; // icon-primary icon-primary-outline
    let _sizeClass = '';
    let _iconAlign = '';
    let _radiusSize = '';

    if (iconSize === 'xsmall') {
      _sizeClass = 'w-4 h-4';
    }
    if (iconSize === 'small') {
      _sizeClass = 'w-4 h-4';
    }
    if (iconSize === 'med') {
      _sizeClass = 'w-6 h-6';
    }
    if (iconSize === 'medium') {
      _sizeClass = 'w-6 h-6';
    }
    if (iconSize === 'large') {
      _sizeClass = 'w-8 h-8';
    }
    if (iconAlign === 'left') {
      _iconAlign = 'ml-1 mr-2';
    }
    if (iconAlign === 'right') {
      _iconAlign = 'ml-2 mr-1';
    }
    if (iconAlign === 'center') {
      _iconAlign = 'ml-1 mr-1';
    }
    if (iconRadius === 'small') {
      _radiusSize = 'rounded-md';
    }
    if (iconRadius === 'med') {
      _radiusSize = 'rounded-lg';
    }
    if (iconRadius === 'large') {
      _radiusSize = 'rounded-full';
    }

    const finalClass =
      disClass + ' ' + _sizeClass + ' ' + _radiusSize + ' ' + _iconAlign;
    this.logger.trace('**** icon class:', finalClass);
    this.finalClassApplied = finalClass;
  }
}
