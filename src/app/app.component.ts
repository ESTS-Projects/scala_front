import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //#region Properties

  users: Array<any>;

  //#endregion

  //#region Lifecycle

  constructor(private http: HttpClient) {
    this.users = [];
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  //#endregion

  //#region Event handlers

  onRefresh(): void {
    this.loadUsers();
  }

  //#endregion

  //#region Methods

  private loadUsers(): void {
    this.http.get<Array<any>>('http://localhost:3000/users').subscribe(users=> {
      this.users = users;
    });
  }

  //#endregion
}
