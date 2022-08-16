import { Component, OnInit } from '@angular/core';
import { BookComponentService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  bookService: BookComponentService;

  constructor(bookService: BookComponentService) { 
    this.bookService = bookService;
  }

  ngOnInit(): void {

    this.livros = this.bookService.getBooks()
    console.log(this.livros);

    // if using api
    // this.livros = this.booksService.getBooks().subscribe((data => {
    //   this.livros = data;
    //   console.log(this.livros);
    // }))

  }

}
