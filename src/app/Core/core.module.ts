import { NgModule } from '@angular/core';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderSectionComponent,
  ],
  imports: [
    RouterModule
  ],
  exports:[
    HeaderSectionComponent,
  ]
})
export class CoreModule { }
