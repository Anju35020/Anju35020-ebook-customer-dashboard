import { Component, inject } from '@angular/core';
import { Book, BookService } from '../core/services/book.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  standalone: true
})
export class DashboardComponent {
  books: Book[] = [];

  constructor(
    private authService: AuthService,
    private bookService: BookService,
    private router: Router,
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    this.bookService.getBooksList().subscribe(data => {
      this.books = data.map(book => ({
        ...book,
        isPurchased: localStorage.getItem(`book-${book.id}-purchased`) === 'true' // Check if book is purchased
      }));
    });
  }

  purchaseBook(id: number) {
    localStorage.setItem(`book-${id}-purchased`, 'true');
    this.toastService.success('Book purchased successfully!');
    this.getBook(); 
  }

  readBook(id: number) {
    const isPurchased = localStorage.getItem(`book-${id}-purchased`);
    if (isPurchased) {
      this.router.navigate(['/read', id]);
    } else {
    this.toastService.error('Please purchase the book before reading.');
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
