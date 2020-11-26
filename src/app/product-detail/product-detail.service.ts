import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../products-list/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    private productSubject: BehaviorSubject<Product>;
    public allProduct: Observable<Product>;
    private urlAPI = 'https://gst-demo.herokuapp.com/api/products';

    constructor(private http: HttpClient) {
        this.productSubject = new BehaviorSubject<Product>(
        JSON.parse(localStorage.getItem('product')!)
        );
        this.allProduct = this.productSubject.asObservable();
    }

    find(id:number):Observable<Product[]>{
      return this.http.get<Product[]>(`${this.urlAPI}/${id}`).pipe(
      )
      
    }
}