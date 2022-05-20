# nlw_return  - Feedback Widget


Semana NLW Return, desenvolvida pela empresa Rocketseat.<br/>
<br/>
Onde construimos uma API para reportar bugs de uma aplicação, que foi utilizado na seguinte aplicação

- https://github.com/moraes3000/nlw_return

Foi utilizado um pouco a metodóloga SOLID, para a organização dos itens


## Tecnologias

Este projeto foi feito utilizando as seguintes tecnologias:

- [prisma](https://www.prisma.io/)
- [Typescript](https://www.typescriptlang.org/)
- [express](https://expressjs.com/pt-br/)
- [nodemailer](https://nodemailer.com/about/) - API de teste de envio de emails


### Tutorial de instalação

Clone o projeto

```term

git@github.com:moraes3000/nlw_backend.git

```

Instale as dependências

```term

npm install

```

Rode o projeto

```term

npm run dev

```

Acesse pelo Insomnia a seguinte rota[http://localhost:3333/feedbacks](http://localhost:3333/feedbacks) para fazer um post mande as seguintes informações
```js

{
	"type":"BUG",
	"comments":"Bug detectado"
}	

```
