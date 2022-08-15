import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from 'src/app/model/class/class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private baseUrl= "http://localhost:9090/classes";

  constructor(private http: HttpClient) { }

  public getClassById(classId: number): Observable<Class> {
    return this.http.get<Class>(`${this.baseUrl}/getClass/${classId}`);
  }
}
