import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation/reservation';
import { User } from '../model/user/user';
import { ReservationService } from '../service/reservation/reservation.service';
import { UserService } from '../service/user/user.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../model/car/car';
import { CarService } from '../service/car/car.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  car!: Car;
  public carId!: string;

  public carIdSelected!: number;

  public users!: User[];
  public username!: string;
  public usernameSelected!: string;
  public userId!: number;

  public fromDate!: Date;
  public toDate!: Date;
  public pricePerDay!:number;

  public days!: number;
  public totalPrice!: number;

  public reservation!: Reservation;
  public reservationCode!: string;
  
  constructor(
    private userService: UserService,
    private reservationService: ReservationService,
    private router: Router,
    private carService: CarService,
    private activatedRoute: ActivatedRoute
    ) { 
      this.activatedRoute.params.subscribe(
        params => {
           this.carId = params['id'];
           this.carId = this.carId.substring(1);
          console.log(this.carId);
        }
      )
    }

  ngOnInit(): void {

    this.getFromDate();
    this.getToDate();
    this.getUsername();
    
    this.car = this.findCarById();
  }

  public getFromDate() {
    let data: any = localStorage.getItem('fromDateStored');
    this.fromDate = JSON.parse(data);
  }

  public getToDate() {
    let data: any = localStorage.getItem('toDateStored');
    this.toDate = JSON.parse(data);
  }

  public getUsername(){
    let data: any = localStorage.getItem('usernameStored');
    this.username = JSON.parse(data);
    console.log(this.username);
    this.findUserByUsername(this.username);
  }

  public findCarById(): any {
    if (Number(this.carId) != 0) {
      this.carService.findCarById(Number(this.carId)).subscribe(
        (response: Car) => {
          this.car = response;
          this.pricePerDay = this.car.price_per_day;
          this.carIdSelected = this.car.id
          console.log(this.pricePerDay);
          this.getTotalPrice();
        });
    } else {
      console.log("Error");
    }
    ;
  }

  public getTotalPrice() {
    const msInDay = 24 * 60 * 60 * 1000;
    const date1: Date = new Date(this.fromDate);
    const date2: Date = new Date(this.toDate);
    let days = Math.round(Math.abs(Number(date2) - Number(date1)) / msInDay);
    this.totalPrice = days * this.pricePerDay;
  }

  public findUserByUsername(username: string){
    this.userService.getUserByName(username).subscribe(
      (response: User[]) => {
        this.usernameSelected = this.username;
        this.users = response;
        console.log(this.users);
        this.userId = this.users[0].id;
      });
  }

  public addReservation(): any {
    const reservation = new Reservation(this.carIdSelected, this.fromDate, this.toDate, this.userId, this.totalPrice);
    this.reservationService.addReservation(reservation).subscribe(
      (response: Reservation) => {
        this.reservation = response;
        console.log(response);
        this.reservationCode = this.reservation.reservation_code;
        console.log(this.reservationCode);
      });
  }
}
