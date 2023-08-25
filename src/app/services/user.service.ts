import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { adaptUserTable } from "../adaptors/user-adaptor";
import {map} from "rxjs/operators";
import { RxUser, UserTableList } from "./interfaces";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserTableList> {
    return this.httpClient.get('http://jsonplaceholder.typicode.com/users').pipe(
      map((res) => {
        const users = adaptUserTable(<RxUser[]>res);
        return {
          users,
        }
      }));
  }
}
