// src/app/services/book.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  price?: number;
  coverUrl: string;
  pages: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      price: 12.99,
      coverUrl: 'https://via.placeholder.com/150?text=Book+1',
      pages: [
        'Page 1 content: In my younger and more vulnerable years, my father gave me some advice that I’ve been turning over in my mind ever since.',
        'Page 2 content: "Whenever you feel like criticizing anyone," he told me, "just remember that all the people in this world haven’t had the advantages that you’ve had."',
        'Page 3 content: He didn’t say any more, but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that.',
      ],
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
      price: 14.99,
      coverUrl: 'https://via.placeholder.com/150?text=Book+2',
      pages: [
        'Page 1 content: Maycomb was a tired, dirty, and sick town, but it was a town of the people.',
        'Page 2 content: I wanted to see what it was like to live in this town, and when I was asked by Scout, I could tell it was a good place to live.',
        'Page 3 content: It was the day of the trial, and all the people lined up in front of the courthouse.',
      ],
    },
    {
      id: 3,
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      category: 'Non-Fiction',
      price: 19.99,
      coverUrl: 'https://via.placeholder.com/150?text=Book+3',
      pages: [
        'Page 1 content: One hundred thousand years ago, at least six human species inhabited the earth.',
        'Page 2 content: Homo sapiens is the last surviving species of the genus Homo. What happened to the others?',
        'Page 3 content: Our story begins in the plains of East Africa, where Homo sapiens emerged about two hundred thousand years ago.',
      ],
    },
    {
      id: 4,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      category: 'Fiction',
      coverUrl: 'https://via.placeholder.com/150?text=Book+4',
      pages: [
        'Page 1 content: If you really want to hear about it, the first thing you’ll probably want to know is where I was born, and what my lousy childhood was like.',
        'Page 2 content: I don’t feel like going into it, if you want to know the truth. In fact, I don’t even feel like giving you my opinion of the kind of school I went to.',
        'Page 3 content: But I’ll tell you this, I had a nervous breakdown and could not continue with the book.',
      ],
    },
    {
      id: 5,
      title: 'Educated: A Memoir',
      author: 'Tara Westover',
      category: 'Non-Fiction',
      price: 16.99,
      coverUrl: 'https://via.placeholder.com/150?text=Book+5',
      pages: [
        'Page 1 content: I was born in rural Idaho, the youngest of seven children in a family that valued independence and survival over education.',
        'Page 2 content: My parents didn’t believe in schools, and we grew up without electricity or running water.',
        'Page 3 content: As I grew older, I realized that the world I lived in was vastly different from the one outside our isolated mountain home.',
      ],
    },
  ];

  // Method to get the list of books
  getBooksList(): Observable<Book[]> {
    return of(this.books);
  }

  // Method to get a single book by ID
  getBookById(id: number): Observable<Book | undefined> {
    return of(this.books.find(book => book.id === id));
  }
}
