<h3 align="center">
  <img alt="GoBarber" src="https://github.com/gianferreira/gostack11-gobarber-backend/blob/master/readme-logo.svg" width="200px"/>
</h3>

<h1 align="center">
  GoBarber - Back-end
</h1>

<p align="center">API em Node.js da aplicação GoBarber.</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gianferreira/gostack11-gobarber-backend">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gianferreira/gostack11-gobarber-backend">
  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/gianferreira/gostack11-gobarber-backend">
</p>

## Sobre:

O GoBarber é uma aplicação para controle de agendamento de serviços de barbearia. Onde por meio da aplicação mobile, o cliente pode agendar um horário com um prestador de serviço (provider). Na aplicação web, os prestadores de serviço podem cancelar, verificar seus agendamentos, dentre outras funcionalidades.

A API construída com node.js e typescript realiza o cadastro e manutenção de `users`, esses usuários providers possuem `id`,`name`,`email`,`password` e um `avatar`de identificação.

Podem ser cadastrados novos `appointments`, aos quais possuem um `id`, `provider` e um `date`.

## Tecnologias utilizadas:

- Node.js
- Yarn
- Typescript
- Express
- TypeORM
- Postgres
- JWT
- Bcrypt
- Multer
- Eslint
- Prettier

## Instalação e execução:

Na primeira vez que for utilizar, faça um clone deste repositório:

```bash
$ git clone https://github.com/gianferreira/gostack11-gobarber-backend
```

Dentro da pasta do seu repositório criado, utilize o comando abaixo para instalar as dependências da aplicação:

```bash
yarn
```

Criar uma base de dados e configurar em `ormconfig.json`.
Para iniciar o servidor:

```bash
yarn dev:server
```

> Utilização do [Insomnia](https://insomnia.rest/download/) para testar as rotas.

---

<p align="center"> Gian Ferreira </p>
<p align="center">
  <a alt="Gian Ferreira" href="https://www.linkedin.com/in/gian-ferreira-7750a9179/">
    <img src="https://img.shields.io/badge/LinkedIn-Gian_Ferreira-7750a9179?logo=linkedin"/>
  </a>
  <a alt="Gian Ferreira" href="https://github.com/gianferreira">
    <img src="https://img.shields.io/badge/Gian_Ferreira-GitHub-000?logo=github"/>
  </a>
</p>

<blockquote align="center">
  Este projeto foi desenvolvimento durante o
    <a href="https://rocketseat.com.br/gostack">
      Gostack 11.0 da RocketSeat
    </a>
</blockquote>
