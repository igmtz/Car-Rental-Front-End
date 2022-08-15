import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { Car } from '../model/car/car';
import { Class } from '../model/class/class';
import { CarService } from '../service/car/car.service';
import { ClassService } from '../service/class/class.service';

@Component({
  selector: 'app-rental-page',
  templateUrl: './rental-page.component.html',
  styleUrls: ['./rental-page.component.css']
})
export class RentalPageComponent implements OnInit {

  cars!: Car[];

  constructor(
    private carService: CarService,
    public classService: ClassService,
    public appComponent: AppComponent
    ) { }

  ngOnInit(): void {
  }

  private findByPrice(from: number, to: number): void {
    this.carService.findByPrice(from, to).subscribe(
      (response: Car[]) => {
      });
  }


}
