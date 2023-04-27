import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseHomeComponent } from './showcase-home/showcase-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShowcaseHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ShowcaseHomeComponent }]),
  ],
})
export class ShowcaseHomeModule {}
