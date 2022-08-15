import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from 'src/app/model/model/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private baseUrl = "http://localhost:9090/models"

  constructor(private http: HttpClient) { }

  public getModelById(modelId: number): Observable <Model> {
    return this.http.get<Model>(`${this.baseUrl}/getModel/${modelId}`);
  }
}
