import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './components/pager/pager.component';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnumToStringPipe } from './pipes/enum-to-string.pipe';
import { DateTimeComponent } from './components/date-time/date-time.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PagerComponent,
    PagingHeaderComponent,
    EnumToStringPipe,
    DateTimeComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,

  ],
  exports: [
    PagingHeaderComponent,
    PagerComponent,
    EnumToStringPipe,
    DateTimeComponent,
  ],
})
export class SharedModule {}
