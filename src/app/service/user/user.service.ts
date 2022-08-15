import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private baseUrl= "http://localhost:9090/users";

  constructor(private http: HttpClient) { }

  public getUserById(userId: number): Observable <User> {
    return this.http.get<User>(`${this.baseUrl}/find/${userId}`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/addUser`, user);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getAll`);
  }

  public getUserByName(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/findUserByName/?username=${username}`);
  }
}
