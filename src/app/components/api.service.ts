import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) {}

  // Add Customer Details to the API functionality
  postCustomer(data: any) {
    return this.http.post<any>(`${this.url}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Get Customer Details from the API functionality
  getCustomer() {
    return this.http.get<any>(`${this.url}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Update Customer Details from the API functionality
  updateCustomer(data: any, id: number) {
    return this.http.put<any>(`${this.url}/` + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Delete Customer Details by ID from the API functionality
  deleteCustomer(id: number) {
    return this.http.delete<any>(`${this.url}/` + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
