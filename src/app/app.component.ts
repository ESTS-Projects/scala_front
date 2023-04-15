import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //#region Properties

  cars: Array<any>;

  //#endregion

  //#region Lifecycle

  constructor(private http: HttpClient) {
    this.cars = [];
  }

  ngOnInit(): void {
    this.loadCars();
  }

  //#endregion

  //#region Event handlers

  onRefresh(): void {
    this.loadCars();
  }

  //#endregion

  //#region Methods

  private loadCars(): void {
    this.http.get<Array<any>>('http://localhost:3000/cars').subscribe(cars => {
      this.cars = cars;
    });
  }

  //#endregion
}
