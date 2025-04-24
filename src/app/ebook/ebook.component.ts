import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { BookService } from "../core/services/book.service";
import { CommonModule } from "@angular/common";
import { AuthService } from "../core/services/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class EbookComponent {
  bookContent: any;
  data: any;
  currentPage: number = 0;
  currentLine: number = 0;
  bookId: any;
  categoryProgress: number = 0;
  dummyContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

`
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.bookId).subscribe({
      next: (res) => {
        if (res) {
          this.data = res;
          this.bookContent = res;
          this.currentPage = Number(localStorage.getItem(`book-${this.bookId}-currentPage`) || 0);
          this.currentLine = Number(localStorage.getItem(`book-${this.bookId}-page-${this.currentPage}-currentLine`) || 0);
          this.calculateCategoryProgress();
        }
      },
      error: (err) => {
        this.toastrService.error('No record found.');
      }
    });
  }

  nextPage() {
    if (this.currentPage < this.bookContent.pages.length - 1) {
      this.currentPage++;
      localStorage.setItem(`book-${this.bookId}-currentPage`, String(this.currentPage));
      this.currentLine = Number(localStorage.getItem(`book-${this.bookId}-page-${this.currentPage}-currentLine`) || 0);
      this.calculateCategoryProgress();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      localStorage.setItem(`book-${this.bookId}-currentPage`, String(this.currentPage));
      this.currentLine = Number(localStorage.getItem(`book-${this.bookId}-page-${this.currentPage}-currentLine`) || 0);
      this.calculateCategoryProgress();
    }
  }

  onLineChange(lineIndex: number) {
    this.currentLine = lineIndex;
    localStorage.setItem(`book-${this.bookId}-page-${this.currentPage}-currentLine`, String(lineIndex));
  }
  calculateCategoryProgress() {
    if (this.data?.category) {
      this.categoryProgress = this.bookService.getCategoryProgress(this.data.category);
      console.log(`${this.data.category} category progress: ${this.categoryProgress}%`);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
