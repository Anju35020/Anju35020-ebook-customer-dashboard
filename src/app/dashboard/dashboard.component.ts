import { Component } from '@angular/core';
import { Book, BookService } from '../ebook/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  standalone: true
})
export class DashboardComponent {
  books: Book[] = [];
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(){
    this.getBook();
  }

  getBook(){
    this.bookService.getBooksList().subscribe(data =>{
      this.books = data;
    })
  }
  purchaseBook(id: number){

  }

  readBook(id: number){
    
  }
}
