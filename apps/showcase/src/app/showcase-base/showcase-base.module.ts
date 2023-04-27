import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseBaseHomeComponent } from './showcase-base-home/showcase-base-home.component';
import { RouterModule } from '@angular/router';

// APP imports
import { NgxCastleUiModule } from '@bizappzone/ngx-castle-ui';

@NgModule({
  declarations: [ShowcaseBaseHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ShowcaseBaseHomeComponent }]),
    NgxCastleUiModule,
  ],
  exports: [ShowcaseBaseHomeComponent],
})
export class ShowcaseBaseModule {}
