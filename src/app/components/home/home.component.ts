import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public prevList: Array<any> = [];
  public gamesList: Array<any> = [];

  constructor(public service: HomeService) { }

  ngOnInit(){
    this.getGamesList();
  }

  public getGamesList(){
    this.service.getGamesList().subscribe((res) =>{
      console.log('res', res);
      this.gamesList = res;
      this.prevList = this.gamesList;
    })
  }

  public filterList(value){
    this.gamesList = this.prevList;
    if(value !== null){
      if(value !== 'other'){
        this.gamesList = this.gamesList.filter((element) =>{
          for (let index = 0; index < element.categories.length; index++) {
            const item = element.categories[index];
            if(item === value){
              return element;
            }
          }
        });
      }else{
        this.gamesList = this.gamesList.filter((element) =>{
          for (let index = 0; index < element.categories.length; index++) {
            const item = element.categories[index];
            if(item === 'ball' || item === 'virtual' || item === 'fun'){
              return element;
            }
          }
        });
      }
      console.log('list', this.gamesList);

    }else{
      this.gamesList = this.prevList;
    }
  }

}
