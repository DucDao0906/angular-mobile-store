import { Component, OnInit } from '@angular/core';
import { Product } from '../products-list/model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-detail/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  data = new Product();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.username) {
      this.router.navigateByUrl('/');
    }
    this.getRoute(this.route.snapshot.params['id']);
  }

  getRoute(id: any) {
    this.productService.find(id).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
