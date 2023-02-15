import { Component, OnInit } from '@angular/core';

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

  constructor() {
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
    this.users = [
      { id: 1, first_name: 'Oussama', last_name: 'Essamadi', age: 24 },
      { id: 2, first_name: 'John', last_name: 'Doe', age: 47 }
    ];
  }

  //#endregion
}
