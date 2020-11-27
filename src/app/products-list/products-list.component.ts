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
  datas: Product[] = [];
  constructor(
    private productListService: ProductsListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.username) {
      this.router.navigateByUrl('/');
    }
    this.getProducts();
  }

  getProducts = () => {
    this.productListService.getAll().subscribe((res: any) => {
      this.datas = res;
      console.log(this.datas);
    });
  };

  // addCart = (id) => {
  //   let data = this.datas.find((data) => data.id === id);
  //   console.log(data);
  // };
  addCart = (item) => {
    let count = document.getElementById('cart__count');
    let cartCopy = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cartCopy.find((cartItem) => cartItem._id === item._id);
    if (existingItem) {
      existingItem.amount += 1;
    } else {
      item.amount = 1;
      let { _id, amount, productName, price } = item;
      cartCopy.push({ _id, amount, productName, price });
    }
    localStorage.setItem('cart', JSON.stringify(cartCopy));
    count.textContent = cartCopy.length;
  };
}
