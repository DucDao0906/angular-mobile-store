import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsListService } from '../products-list/products-list.service';
import { api } from '../utils/api';
import { Product } from '../products-list/model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  datas:Product[]=[];
  constructor(
    private productListService: ProductsListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts = () => {
    this.productListService.getAll().subscribe((res:any)=>{
      this.datas = res;
      console.log(this.datas);
    })
  };

  addCart = (id) => {
    let data = this.datas.find(data => data.id === id);
    console.log(data);
    
  }
}
