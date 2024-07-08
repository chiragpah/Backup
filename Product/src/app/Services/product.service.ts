import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Book } from '../Modell/book';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://localhost:3000/books'
  private updateSubject: Subject<void> = new Subject<void>();
  constructor(private http: HttpClient) { }
  createProduct(formData: FormData) {
    return this.http.post<Book>(`${this.url}/AddBook`, formData);
  }
  getAllProduct(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.url}/getBook`);
  }
  getBookById(ProductId: string) {
    console.log(ProductId);
    return this.http.get<Book>(`${this.url}/getBook/${ProductId}`);
  }
  editBook(formData: FormData, ProductId: string) {
    return this.http.put<Book>(`${this.url}/updateBook/${ProductId}`, formData)
    this.getAllProduct()

  }

  deleteProduct(productId: string) {
    return this.http.delete<Book>(`${this.url}/deleteBook/${productId}`)
  }
  notifyUpdates(): void {
    this.updateSubject.next();
  }
  onUpdate(): Observable<void> {
    return this.updateSubject.asObservable();
  }
}
