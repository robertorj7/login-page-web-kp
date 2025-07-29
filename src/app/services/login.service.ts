import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:8080/auth";

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    const body = { email, password };

    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/login`, body).pipe(      
      tap(response => {
        sessionStorage.setItem("authToken", response.token);
        sessionStorage.setItem("username", response.name);
      })
    );
  }

  signup(name: string, email: string, password: string) {
    const body = { name, email, password };

    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/signup`, body).pipe(      
      tap(response => {
        sessionStorage.setItem("authToken", response.token);
        sessionStorage.setItem("username", response.name);
      })
    );
  }
}
