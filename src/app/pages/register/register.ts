import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Importa o necessário aqui
  templateUrl: './register.html', // Corrigido para o nome que o CLI costuma gerar
  styleUrls: ['./register.css']
})
export class Register { // Usando o nome da classe sem o sufixo
  user = {
    username: '',
    email: '',
    password: ''
  };
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Registro bem-sucedido', response);
        // Redireciona para a página de login após o sucesso
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro no registro', err);
        this.error = 'Falha ao registrar. Verifique os dados e tente novamente.';
      }
    });
  }
}