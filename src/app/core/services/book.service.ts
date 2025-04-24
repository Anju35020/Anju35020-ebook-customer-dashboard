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
  isPurchased?: boolean; 
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
      coverUrl: './assets/the_great_gatsby.jpg',
      pages: [
        'Page 1 The Great Gatsby',
        'Page 2 The Great Gatsby',
        'Page 3 The Great Gatsby',
      ],
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
      price: 14.99,
      coverUrl: './assets/monkingbird.jpg',
      pages: [
        'Page 1 To Kill a Mockingbird',
        'Page 2 To Kill a Mockingbird',
        'Page 3 To Kill a Mockingbird',
      ],
    },
    {
      id: 3,
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      category: 'Non-Fiction',
      price: 19.99,
      coverUrl: './assets/humnkind.jpg',
      pages: [
        'Page 1 Sapiens: A Brief History of Humankind',
        'Page 2 Sapiens: A Brief History of Humankind',
        'Page 3 Sapiens: A Brief History of Humankind',
        'Page 4 Sapiens: A Brief History of Humankind',
      ],
    },
    {
      id: 4,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      category: 'Fiction',
      price: 11.00,
      coverUrl: './assets/rey.jpg',
      pages: [
        'Page 1 The Catcher in the Rye',
        'Page 2 The Catcher in the Rye',
        'Page 3 The Catcher in the Rye',
      ],
    },
    {
      id: 5,
      title: 'Educated: A Memoir',
      author: 'Tara Westover',
      category: 'Non-Fiction',
      price: 16.99,
      coverUrl: './assets/educated.jpg',
      pages: [
        'Page 1 Educated: A Memoir',
        'Page 2 Educated: A Memoir',
        'Page 3 Educated: A Memoir',
        'Page 4 Educated: A Memoir',
        'Page 5 Educated: A Memoir',
      ],
    },
  ];

  getBooksList(): Observable<Book[]> {
    return of(
      this.books.map((book) => {
        const purchasedStatus = localStorage.getItem(`book-${book.id}-purchased`) === 'true';
        return {
          ...book,
          isPurchased: purchasedStatus, 
        };
      })
    );
  }
  

  getBookById(id: number): Observable<Book | undefined> {
    const findBook = this.books.find((book) => book.id == id);
    if (findBook) {
      findBook.isPurchased = localStorage.getItem(`book-${findBook.id}-purchased`) === 'true';
    }
    return of(findBook);
  }

  purchaseBook(id: number): void {
    localStorage.setItem(`book-${id}-purchased`, 'true');
  }

  getCategoryProgress(category: string): number {
    const categoryBooks = this.books.filter(book => book.category === category);
  
    let totalPagesRead = 0;
    let totalPages = 0;
  
    for (const book of categoryBooks) {
      const totalBookPages = book.pages.length;
      const currentPageIndex = Number(localStorage.getItem(`book-${book.id}-currentPage`) || 0);
  
      totalPages += totalBookPages;
  
      const pagesRead = currentPageIndex >= totalBookPages ? totalBookPages : currentPageIndex + 1;
      totalPagesRead += pagesRead;
    }
  
    return totalPages > 0 ? Math.round((totalPagesRead / totalPages) * 100) : 0;
  }
  
}
