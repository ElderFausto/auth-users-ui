import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private readonly TOKEN_KEY = 'auth_token';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // Método para registro
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  // Método para login
  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, credentials).pipe(
      // 'tap' é um operador do RxJS que executa um "efeito colateral" sem modificar a resposta.
      // Aqui, usamos para salvar o token no localStorage após o login bem-sucedido.
      tap(response => {
        if (response && response.token) {
          this.setToken(response.token);
        }
      })
    );
  }

  // Método para buscar o perfil do usuário (requer autenticação)
  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/me`);
  }

  // Salva o token no localStorage
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Obtém o token do localStorage
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Verifica se o usuário está logado
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Faz o logout do usuário
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    // Redireciona para a página de login
    this.router.navigate(['/login']);
  }
}