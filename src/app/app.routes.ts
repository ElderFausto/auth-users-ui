import { Routes } from '@angular/router';

// Importe os componentes de página que você criou
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  // Rota padrão: redireciona para /login se a URL estiver vazia
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // Rota para a página de login
  {
    path: 'login',
    component: Login
  },
  // Rota para a página de registro
  {
    path: 'register',
    component: Register
  },
  // Rota para a página de perfil do usuário
  {
    path: 'profile',
    component: Profile
  }
];