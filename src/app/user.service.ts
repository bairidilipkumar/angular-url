import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:Array<User> = [];
  constructor(private http:HttpClient) { }


  getAllUser(){
    return this.http.get<Array<User>>(`https://616a6f7816e7120017fa0f91.mockapi.io/api/v1/url`)
  }
}
