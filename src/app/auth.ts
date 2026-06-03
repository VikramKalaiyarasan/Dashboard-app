import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string): boolean {

    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('user', username);
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

  getUser(): string {
    return localStorage.getItem('user') || '';
  }
}