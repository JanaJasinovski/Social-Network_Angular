import {Injectable} from '@angular/core';
import {User} from "../moduls/User";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-key';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY) || '{}';
  }

  public saveUser(user: User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): string {
    return JSON.parse(sessionStorage.getItem(USER_KEY) || '{}');
  }

  logout(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }
}
