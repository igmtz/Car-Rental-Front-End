import { Component, OnInit } from '@angular/core';
import { Car } from './model/car/car';
import { Class } from './model/class/class';
import { Model } from './model/model/model';
import { User } from './model/user/user';
import { CarService } from './service/car/car.service';
import { ClassService } from './service/class/class.service';
import { ModelService } from './service/model/model.service';
import { UserService } from './service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  constructor(
    private userService: UserService,
    public carService: CarService,
    private classService: ClassService,
    private modelService: ModelService
    ){}

    ngOnInit(): void {
      this.classId =0;
      this.modelId = 0;
      this.carId = 0;

      this.priceFrom = 0;
      this.priceTo = 0;

      this.username = '';
      this.userSelected = '';
    }

  public findCarById(): void {
    if (this.carId != 0) {
      this.carService.findCarById(this.carId).subscribe(
        (response: Car) => {
          this.car = response;
        });
    } else {
      console.log("Error");
    };
  }

 public findClassById(): void {
  if (this.classId != 0) {
    this.classService.getClassById(this.classId).subscribe(
      (response: Class) => {
        this.class = response;
      });
    };
  }

  public findModelById(): void {
    if (this.modelId != 0) {
      this.modelService.getModelById(this.modelId).subscribe(
        (response: Model) => {
          
          this.model = response;
        });
    };
  }

  public getCars(): void {
    this.carService.getCars().subscribe(
      (response: Car[]) => {
        this.cars = response;
      });
  }

  public findCarsByModel(): void {
    this.carService.findByModel(this.modelId).subscribe(
      (response: Car[]) => {
        this.cars = response;
      });
  }

  public findCarsByClass(): void {
    this.carService.findByClass(this.classId).subscribe(
      (response: Car[]) => {
        this.cars = response;
      });
  }

  public findCarsByPrice(): void {
    this.carService.findByPrice(this.priceFrom, this.priceTo).subscribe(
      (response: Car[]) => {
        this.cars = response;
      });
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

}