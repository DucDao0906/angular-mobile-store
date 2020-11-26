import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../products-list/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { api } from '../utils/api';

@Injectable({
    providedIn: 'root',
})

export class ProductsListService {
    private allProductSubject: BehaviorSubject<Product>;
    public allProduct: Observable<Product>;
    private urlAPI = 'https://gst-demo.herokuapp.com/api/products';

    constructor(private http: HttpClient) {
        this.allProductSubject = new BehaviorSubject<Product>(
        JSON.parse(localStorage.getItem('allProduct')!)
        );
        this.allProduct = this.allProductSubject.asObservable();
    }

    getAll():Observable<Product[]>{
      return this.http.get<Product[]>(this.urlAPI).pipe(
      )
      
    }
}