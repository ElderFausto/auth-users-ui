# Aplicação de Autenticação com Angular
<img width="678" height="614" alt="image" src="https://github.com/user-attachments/assets/72c66db7-c797-4906-802a-3964d9a2cf83" />

Frontend para uma API de autenticação, permitindo que usuários se registrem, façam login, visualizem seus perfis e façam logout.

## Tecnologias Utilizadas
- Angular 17+
- TypeScript
- Angular CLI
- HTML5 / CSS3

## Como Rodar a Aplicação
1.  **Pré-requisito:** Tenha o Node.js e o Angular CLI instalados. O backend (`API`) deve estar rodando em `http://localhost:8080`.
2.  Clone este repositório (ou navegue até a pasta).
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
5.  Acesse a aplicação em `http://localhost:4200` no seu navegador.

## Funcionalidades
- **Páginas e Roteamento:**
  - `/login`: Página de login.
  - `/register`: Página de cadastro.
  - `/profile`: Página de perfil do usuário (acessível apenas após o login).
- **Gerenciamento de Estado:**
  - O token JWT é armazenado no `localStorage` do navegador.
- **Autenticação Automática:**
  - Um `HttpInterceptor` é usado para anexar automaticamente o cabeçalho `Authorization: Bearer <token>` a todas as requisições para a API, simplificando a comunicação com rotas protegidas.
- **Navegação Condicional:** A barra de navegação exibe links diferentes dependendo se o usuário está logado ou não.
