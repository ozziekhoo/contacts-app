import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { adaptUser } from "../adaptors/user-adaptor";
import {map} from "rxjs/operators";
import { rxUser, UserList } from "./interfaces";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserList> {
    return this.httpClient.get('http://jsonplaceholder.typicode.com/users').pipe(
      map((res) => {
        const users = adaptUser(<rxUser[]>res);
        return {
          users,
        }
      }));
  }
}
