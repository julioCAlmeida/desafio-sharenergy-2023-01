# Página de login

A página consiste no acesso de usuário através de login. Após o login o usuário terá acesso as páginas de api user generator, api http/cat, random api dog, a lista de clientes que podem ser cadastrados, alterados, buscados e deletados.

## Instalação backend

Utilizar pocote [express](https://expressjs.com/pt-br/) para realizar o projeto em [nodejs](https://nodejs.org/en/).
#### Outras tecnologias 
- [mongoose](https://reactrouter.com/en/main) para banco de dados
- [dotenv](https://www.npmjs.com/package/dotenv) para carregar váriáveis ambiente
- [bcrypt](https://www.npmjs.com/package/bcryptjs) para hash de senhas

```bash
$ npm install express dotenv mongoose bcryptjs --save

```

## Usar Mongoose

```javascript
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
```

## Instalação frontend

Utiliza ferramenta [vitejs](https://vitejs.dev/) para realizar o projeto em [react](https://pt-br.reactjs.org/).
#### Outras tecnologias 
- [react-icons](https://react-icons.github.io/react-icons) para ícones
- [react-router-dom](https://reactrouter.com/en/main) como rotas das páginas
- [styled-components](https://styled-components.com/) para estilizar sistema de componentes React.

```bash
$ npm create vite@latest
$ npm install react-icons react-router-dom styled-components --save

```

## Criar projeto Vitejs

```vitejs
npx degit user/project my-project
cd my-project

npm install
npm run dev
```
#### Link para Youtube 
- https://youtu.be/L1Yt4s0yMyQ
