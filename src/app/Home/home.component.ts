import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { StadiumParams } from '../Shared/Models/StadiumParams';
import { IStadium } from '../Shared/Models/Stadium';
import { SearchType } from '../Shared/Models/SearchType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  StatdiumParams:StadiumParams;
  Statdiums:IStadium[];
  @ViewChild('search', {static: true}) searchTerm!: ElementRef;
  _currentValues:any;
  totalCount: number=0;
  hasFinnishedToGetData:boolean=false;
  
  constructor(private homeService: HomeService) {
    this.StatdiumParams = new StadiumParams();
    this.Statdiums = [];
  }
  ngOnInit(): void {
    this.GetStadiums();
  }
  GetStadiums(){
    this.hasFinnishedToGetData=false;
    this.homeService.GetStatiums(this.StatdiumParams).subscribe(
      (res)=>{
        if(res){
          this.Statdiums=res.data;
          this.totalCount=res.count;
          this.StatdiumParams.pageIndex=res.pageIndex;
          this.StatdiumParams.pageSize=res.pageSize;
          this.hasFinnishedToGetData=true;
        }
      },
      (err)=>{
        console.log("theasd"+ err);

      }
    );
    
  }
  pageChanged(event:any) {
    this.StatdiumParams.pageIndex = event;
    this.GetStadiums();
  }
  isNumeric(value: any): boolean {
    return !isNaN(value);
  }

  getEnumKeysAndValues() {
    return Object.entries(SearchType)
    .filter(([key, value]) => this.isNumeric(value))
    .map(([key, value]) => ({ key, value }));
  }
}
