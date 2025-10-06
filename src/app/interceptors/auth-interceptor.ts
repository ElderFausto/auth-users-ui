import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Pega o token do AuthService
    const token = this.authService.getToken();

    // Se o token existir, clona a requisição e adiciona o cabeçalho de autorização
    if (token) {
      const clonedRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
      // Passa a requisição clonada para o próximo manipulador
      return next.handle(clonedRequest);
    }

    // Se não houver token, passa a requisição original
    return next.handle(request);
  }
}