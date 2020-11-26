import { Component, OnInit } from '@angular/core';
import { api } from '../utils/api';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const res = await api.get('/products');
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
}
