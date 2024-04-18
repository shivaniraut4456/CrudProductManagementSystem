import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  create(data: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, data);
  }

  edit(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }

  update(data: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.baseUrl}/${data.id}`, data);
  }

  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.baseUrl}/${id}`);
  }
}
