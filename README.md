# 🎯 NLW Expert - Node.js

Projeto desenvolvido durante o NLW Expert da Rocketseat, focado em Node.js e suas tecnologias.

## 📋 Sobre o Projeto

Este é um sistema de votação em tempo real que permite aos usuários criarem enquetes e votarem através de uma API REST.

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Fastify
- Prisma
- PostgreSQL
- Redis
- WebSocket

## ⚙️ Funcionalidades

- ✨ Criação de enquetes
- 📊 Votação em tempo real
- 📈 Resultados instantâneos
- 🔄 Websockets para atualizações em tempo real
- 🗄️ Persistência de dados com PostgreSQL
- 📦 Cache com Redis

## 🔧 Pré-requisitos

- Node.js (versão 18.x ou superior)
- npm ou yarn
- Docker (para rodar PostgreSQL e Redis)

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
```

2. Acesse a pasta do projeto:

```bash
cd nome-do-repo
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

4. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

5. Inicie os containers Docker:

```bash
docker compose up -d
```

6. Execute as migrations:

```bash
npx prisma migrate dev
```

7. Inicie o servidor:

```bash
npm run dev
# ou
yarn dev
```

## 📝 Rotas da API

### POST `/polls`

Cria uma nova enquete

### GET `/polls/:pollId`

Retorna os dados de uma enquete específica

### POST `/polls/:pollId/votes`

Registra um voto em uma enquete

### GET `/polls/:pollId/results`

Retorna o resultado em tempo real de uma enquete

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou fazer um pull request.

## 📚 Aprendizados

Este projeto foi desenvolvido durante o NLW Expert da Rocketseat, onde foram abordados conceitos importantes como:

- Arquitetura de APIs REST
- WebSockets para comunicação em tempo real
- Gerenciamento de cache
- Banco de dados relacionais e não-relacionais
- Docker para containerização
- TypeScript para tipagem estática

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Agradecimentos

Agradeço à Rocketseat pela oportunidade de participar do NLW Expert e aprender tantas tecnologias importantes para o desenvolvimento backend com Node.js.

---

Feito com 💜 durante o NLW Expert da Rocketseat
