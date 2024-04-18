import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allproducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.allproducts = data;
    });
  }

  deleteItem(id: number){
    this.productService.delete(id).subscribe({
      next: (data) => {
        this.allproducts = this.allproducts.filter(_ => _.id !== id);
      }
    });
  }
}
