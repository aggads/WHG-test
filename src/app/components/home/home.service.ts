import { Injectable } from '@angular/core';
import { HttpService } from './../../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpService:HttpService) { }

  public getGamesList(){
    return this.httpService.get<any>('http://stage.whgstage.com/front-end-test/games.php');
  }
}
