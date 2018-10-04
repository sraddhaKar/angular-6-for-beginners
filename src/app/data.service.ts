import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getUsers() {
      return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId) {
      return this._http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getPosts() {
      return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
