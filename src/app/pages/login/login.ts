import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login { // Usando o nome da classe sem o sufixo
  credentials = {
    username: '',
    password: ''
  };
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido', response);
        // Redireciona para a página de perfil após o sucesso
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        console.error('Erro no login', err);
        this.error = 'Usuário ou senha inválidos.';
      }
    });
  }
}