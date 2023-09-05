import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent {
  @Input() collectionSize=0;
  @Input() page=0;
  @Input() pageSize=0;
  @Input() maxSize=0;
  @Output() pageChanged = new EventEmitter<number>();
  onPagerChange(event:any){
    this.pageChanged.emit(event);
  }
}
