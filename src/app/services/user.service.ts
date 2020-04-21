import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../interfaces/user.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUserInfo(user: any): Observable<UserInterface> {
      return this.http.get<UserInterface>('http://localhost:3001/' + user + '/info');
  }
}
