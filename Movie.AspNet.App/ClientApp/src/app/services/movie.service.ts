import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private readonly http: HttpClient) { }

  private get<T>(url: string): Observable<T> {
    return this.http.get(url, {
      headers: {
        'Authorization': `Bearer ${environment.token}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    }) as Observable<T>;
  }

  public movieList(listId = 1, pageId = 1 ) {
    return this.get<any>(`https://api.themoviedb.org/4/list/${listId}?page=${pageId}`);
  }
}
