import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../model/car/car';
import { Class } from '../model/class/class';
import { Model } from '../model/model/model';
import { User } from '../model/user/user';
import { CarService } from '../service/car/car.service';
import { ClassService } from '../service/class/class.service';
import { ModelService } from '../service/model/model.service';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public cars!: Car[];
  public car!: Car;
  public class!: Class;
  public model!: Model;

  public carId!:number;
  public modelId!:number;
  public classId!:number;
  public priceFrom!:number;
  public priceTo!:number;

  public username!: string;
  public userSelected!: string;
  public usernameStored!: string; 

  public fromDate!: Date;
  public fromDateStored!: Date;

  public toDate!: Date;
  public toDateStored!: Date;

  
  constructor(
    private carService: CarService,
    private userService: UserService,
    public classService: ClassService,
    private modelService: ModelService
    ) { }

  ngOnInit(): void {
    this.deleteLocalData();

    this.cars = this.getCars();

    this.classId =0;
    this.modelId = 0;
    this.carId = 0;

    this.username = '';
    this.userSelected = '';
  }

  public saveFromDate(date: Date) {
    localStorage.setItem('fromDateStored', JSON.stringify(date));
    console.log("Saved");
    let data: any = localStorage.getItem('fromDateStored');
    this.fromDateStored = JSON.parse(data);
  }

  public saveToDate(date: Date) {
    localStorage.setItem('toDateStored', JSON.stringify(date));
    console.log("Saved");
    let data: any = localStorage.getItem('fromDateStored');
    this.toDateStored = JSON.parse(data);
  }

  public saveUsername(username: string) {
    localStorage.setItem('usernameStored', JSON.stringify(username));
    console.log("Saved");
    let data: any = localStorage.getItem('usernameStored');
    this.usernameStored = JSON.parse(data);
  }

  public deleteLocalData() {
    localStorage.clear();
  }


  public getCars(): any {
    this.carService.getCars().subscribe(
      (response: Car[]) => {
        this.cars = response;
      });
  }

  public getAvailableCars(): any {
    this.carService.getAvailableCars(this.fromDateStored, this.toDateStored).subscribe(
      (response: Car[]) => {
        this.cars = response;
      });
  }

  public findCarsByModel(): void {
    if (this.modelId != 0) {
      this.carService.findByModel(this.modelId).subscribe(
        (response: Car[]) => {
          this.cars = response;
        });
    } else {
      this.cars = this.getCars();
    }
    
  }

  public findCarsByClass(): void {

    if (this.classId != 0) {
      this.carService.findByClass(this.classId).subscribe(
        (response: Car[]) => {
          this.cars = response;
        });
    } else {
      this.cars = this.getCars();
    }
    
  }

  public findCarsByPrice(): void {
    if (this.priceFrom != null && this.priceTo != null) {
      this.carService.findByPrice(this.priceFrom, this.priceTo).subscribe(
        (response: Car[]) => {
          this.cars = response;
        });
    } else {
      this.cars = this.getCars();
    }
  }

  public addUser(): any {
    const user = new User(this.username);
    this.userService.addUser(user).subscribe(
      (response: User) => {
        console.log(response);
        this.userSelected = user.username;
        console.log(this.userSelected);
      });
  }

  public findClassById(classId: number): void {
    if (classId != 0) {
      this.classService.getClassById(classId).subscribe(
        (response: Class) => {
          this.class = response;
        });
      };
    }

}
