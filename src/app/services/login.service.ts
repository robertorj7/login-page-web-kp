import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(name: string, password: string) {
    const body = { name, password };

    return this.httpClient.post<LoginResponse>("/login", body).pipe(      
      tap(response => {
        sessionStorage.setItem("authToken", response.token);
        sessionStorage.setItem("username", response.name);
      })
    );
  }
}
