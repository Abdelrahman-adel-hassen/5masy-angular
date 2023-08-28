import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.css']
})
export class PagingHeaderComponent implements OnInit {
@Input()totalCount=0;
@Input()pageNumber=0;
@Input()pageSize!:number;

  constructor() { }

  ngOnInit(): void {
  }
  calculateMinValue(numberOne:number,numberTwo:number): number {
    return Math.min(numberOne, numberTwo);
  }
}
