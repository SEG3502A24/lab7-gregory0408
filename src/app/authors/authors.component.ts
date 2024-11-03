// authors.component.ts
import { Component } from '@angular/core';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authorId: string = '';        // ID saisi par l'utilisateur
  author?: Author;              // Auteur trouvé
  authorNotFound: boolean = false; // Indicateur si aucun auteur n'est trouvé

  constructor(private booksService: BooksService) {}

  onSubmit(): void {
    this.booksService.getAuthorById(this.authorId).subscribe({
      next: (data: Author) => {
        this.author = data;
        this.authorNotFound = false;
      },
      error: () => {
        this.author = undefined;
        this.authorNotFound = true;
      }
    });
  }
}

