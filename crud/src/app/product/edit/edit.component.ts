import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  formdata : Product = {
    id: 0,
    name: '',
    type: '',
    unit: '',
    subProducts: []
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=> {
      let id = Number(param.get('id'))
      this.getByid(id)
    })
  }
  getByid(id:number){
    this.productService.edit(id).subscribe((data)=> {
      this.formdata = data;
    })
  }

  update(){
    this.productService.update(this.formdata).subscribe({
      next:(data)=> {
        this.router.navigate(["/product/home"])  
    },
       error: (er) => {
        console.log(er);
        
       }
       
  })
  }

}
