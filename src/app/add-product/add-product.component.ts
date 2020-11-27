import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../utils/api';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.username) {
      this.router.navigateByUrl('/');
    }
  }
  addProduct = async (formData) => {
    try {
      // await api.post()
    } catch (error) {
      console.log(error.message);
    }
  };
}
