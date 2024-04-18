import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  formdata: Product = {
    id: 0,
    name: '',
    type: '',
    unit: '',
    subProducts: []
  };
  addSubProduct() {
    this.formdata.subProducts.push({ name: '', unit: '' });
  }

  constructor(private productService: ProductService, private router: Router) { }

  create() {
    this.productService.create(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(["/product/home"]);
      },
      error: (er) => {
        console.log(er);
      }
    });
  }
}
