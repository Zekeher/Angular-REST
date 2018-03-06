import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ListService {

  constructor(private http: Http) { }


  getList(): Observable<any> {
    return this.http.get("./assets/list.json").map((data)=> data.json());

  }
}
