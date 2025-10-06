import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit { // Usando o nome da classe e implementando OnInit
  user: any; // Usaremos 'any' para simplicidade, mas uma interface User seria melhor
  error: string = '';

  constructor(private authService: AuthService) {}

  // ngOnInit é um "gancho de ciclo de vida" que é chamado uma vez quando o componente é iniciado.
  // É o lugar perfeito para buscar dados iniciais.
  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Erro ao buscar perfil', err);
        this.error = 'Não foi possível carregar os dados do perfil. Faça login novamente.';
      }
    });
  }
}