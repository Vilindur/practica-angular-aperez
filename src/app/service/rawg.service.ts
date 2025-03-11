import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.rawg.io/api/games';
  private apiKey = '3c0272daf7844661b369490bb9e9f981';

  constructor(private http: HttpClient) { }

  getGames(pageSize: number, currentPage: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page_size=${pageSize}&page=${currentPage}&key=${this.apiKey}`);
  }
}