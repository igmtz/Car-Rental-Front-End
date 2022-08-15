import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/model/reservation/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl= "http://localhost:9090/reservations";

  constructor(private http: HttpClient) { }

  public getUserByReservationCode(code: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/findByReservationCode/?code=${code}`);
  }

  public addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/addReservation`, reservation);
  }

  public getUsers(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/getAll`);
  }
}
