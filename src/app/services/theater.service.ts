import { Injectable } from '@angular/core';
import { Theater } from '../models/theater.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(private http:HttpClient) {
  }
  list(): Observable<Theater[]> {
    return this.http.get<Theater[]>(`${environment.url_ms_cinema}/theaters`);
  }

  view(id): Observable<Theater> {
    return this.http.get<Theater>(`${environment.url_ms_cinema}/theaters`);
  }

  delete(id: string) {
    return this.http.delete<Theater>(`${environment.url_ms_cinema}/theaters/${id}`,
    );
  }

  create(theater: Theater): Observable<Theater> {
    return this.http.post<Theater>(`${environment.url_ms_cinema}/theaters`, theater);
  }

  update(theater: Theater): Observable<Theater> {
    return this.http.put<Theater>(`${environment.url_ms_cinema}/theaters/${theater.id}`, theater);
  }
   
}
