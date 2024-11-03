// books.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../model/book';

const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {}

  // Méthode pour récupérer un auteur par son ID
  public getAuthorById(id: string): Observable<Author> {
    return this.http.get<Author>(`${Url}authors/${id}`);
  }

  // ... autres méthodes existantes ...
}
