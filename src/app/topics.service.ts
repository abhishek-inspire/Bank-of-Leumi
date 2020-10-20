import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITopics } from './topics';


@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  // JSON URL
  private url = '../assets/data/topics.json';
  constructor(private http: HttpClient) { }

  // GET REQUEST
  getTopics(): Observable<ITopics[]> {
    return this.http.get<ITopics[]>(this.url);
  }
}
