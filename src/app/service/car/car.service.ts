import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/model/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl= "http://localhost:9090/cars";

  constructor(private http: HttpClient) { }

  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/getAll`);
  }

  public findByClass(classId: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/findByClass/${classId}`);
  }

  public findByModel(modelId: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/findByModel/${modelId}`);
  }

  public findByPrice(from: number, to: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/findByPrice/?from=${from}&to=${to}`);
  }

  public findCarById(carId: number): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/find/${carId}`)!;
  }

  public getAvailableCars(from: Date, to: Date): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/getAvailable?from=${from}&to=${to}`);
  }

  public pickUpCar(carId: number): Observable<Car> {
    return this.http.put<Car>(`${this.baseUrl}/pickCar/${carId}`, this.findCarById(carId));
  }

  public returnCar(carId: number): Observable<Car> {
    return this.http.put<Car>(`${this.baseUrl}/returnCar/${carId}`, this.findCarById(carId));
  }
}
