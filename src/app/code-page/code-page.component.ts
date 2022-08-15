import { Component, Input, OnInit } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { Car } from '../model/car/car';
import { UserService } from '../service/user/user.service';
import { Reservation } from '../model/reservation/reservation';
import { CarService } from '../service/car/car.service';
import { ReservationService } from '../service/reservation/reservation.service';
import { User } from '../model/user/user';
import { ClassService } from '../service/class/class.service';
import { Class } from '../model/class/class';

@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.css']
})
export class CodePageComponent implements OnInit {

  fromDate!: Date;
  toDate!: Date;
  
  public reservations!: Reservation[];
  public reservation!: Reservation;

  public code!: string;
  public codeSelected!: string;

  public carId!: number;
  public userId!: number;

  public car!: Car;
  public cars!: Car[];

  public users!: User[];
  public user!: User;

  public username!: string;


  constructor(
    private reservationService: ReservationService,
    private carService: CarService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.code = '';

    this.getFromDate();
  }

  public findReservationByCode(): void {
    this.reservationService.getUserByReservationCode(this.code).subscribe(
      (response: Reservation[]) => {
        this.codeSelected = this.code;
        this.reservations = response;
        this.reservation = this.reservations[0];
        this.carId = this.reservations[0].car_id;
        this.userId = this.reservations[0].user_id;
        this.findCarById(this.carId);
        this.findUserById(this.userId);
      });
  }

  public getFromDate() {
    let data: any = localStorage.getItem('fromDateStored');
    this.fromDate = JSON.parse(data);
  }

  public pickUpCar() {
    this.carService.pickUpCar(this.carId).subscribe(
      (response: any) => {
        console.log("Changed");
      }
    )
  }

  public returnCar() {
    this.carService.returnCar(this.carId).subscribe(
      (response: any) => {
        console.log("Changed");

      }
    )
  }

  public findCarById(carId: number): void {
    if (this.carId != 0) {
      this.carService.findCarById(carId).subscribe(
        (response: Car) => {
          this.car = response;
        });
    } else {
      console.log("Error");
    };
  }

  public findUserById(carId: number): void {
    if (this.carId != 0) {
      this.userService.getUserById(carId).subscribe(
        (response: User) => {
          this.user = response;
        });
    } else {
      console.log("Error");
    };
  }

}
