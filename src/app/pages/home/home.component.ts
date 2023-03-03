import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  books = [1, 2, 3, 4, 5];
  bookInfo = [
    "Ender's Game is a brilliant introduction to Science Fiction in my opinion. The plot is captivating, the characters are interesting and who doesn't love aliens.",
    'Foundations is really cool, you should read it.',
    "There's been so much said about Game of Thrones both for the books and TV series. I won't bore you anymore.",
    'Funny Space Book. Haha',
    'This book is precious. My precious...',
  ];

  highlightedBook: number = 0;
  selectedBook: number = 0;

  updateHighlightedBook(i: number) {
    if (this.highlightedBook == 0) {
      this.highlightedBook = i;
      return;
    }
    if (this.highlightedBook != 0 && i == this.highlightedBook) {
      this.selectedBook = i;
      return;
    }
    if (this.highlightedBook != 0 && i != this.highlightedBook) {
      this.highlightedBook = i;
      return;
    }
  }

  resetBooks() {
    this.highlightedBook = 0;
    this.selectedBook = 0;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
