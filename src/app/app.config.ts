import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Imports necessários
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // Provedor de rotas
    provideRouter(routes),

    // Provedor para FormsModule (para ngModel)
    importProvidersFrom(FormsModule),

    // Provedor do HttpClient, configurado para usar Interceptors via Injeção de Dependência
    provideHttpClient(withInterceptorsFromDi()),

    // Registro do nosso interceptor de autenticação
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};