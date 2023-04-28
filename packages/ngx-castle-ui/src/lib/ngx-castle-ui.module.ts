import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BadgeComponent } from './badge/badge.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, BadgeComponent, IconComponent],
  exports: [ButtonComponent, BadgeComponent, IconComponent],
})
export class NgxCastleUiModule {}
