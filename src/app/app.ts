import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'auth-ui';

  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    console.log('Usuário deslogado');
  }
}