# BeRich — carteira de investimentos mobile

Aplicativo acadêmico em desenvolvimento, criado com React Native e Expo, acompanhado de uma API Node.js/MySQL. Esta cópia pública tem histórico novo e não inclui os arquivos de credenciais do repositório original.

> **Segurança:** credenciais reais foram removidas desta cópia por segurança. Os arquivos `.env.example` contêm nomes de variáveis e placeholders. Crie arquivos `.env` locais com credenciais próprias; eles são ignorados pelo Git.

## Tecnologias

**Aplicativo:** React Native, Expo, React Navigation, React Native Paper, AsyncStorage, Axios, React Native Chart Kit e SVG.

**API:** Node.js, Express, Sequelize, MySQL, Passport, JWT, bcrypt e Brapi.

## O que está implementado

- Cadastro e login no aplicativo
- Contexto de autenticação e armazenamento local
- Navegação entre telas
- Componentes de dashboard e visualização gráfica
- API para autenticação, usuários e cotações
- Integração com cotações externas pela Brapi

## Estado do projeto

Este é um MVP acadêmico em andamento, não um aplicativo financeiro pronto para uso. As telas de ativos, configurações e histórico ainda estão vazias, assim como algumas rotas de transação e ativos. OAuth e consultas externas precisam de credenciais próprias configuradas localmente. O código deve ser revisado antes de qualquer uso além de demonstração.

## Estrutura

```text
GerenciadorDeFundos/
├── App.js
├── src/
│   ├── components/
│   ├── context/
│   ├── navigation/
│   ├── screens/
│   └── services/api/
└── api/
    ├── index.js
    └── src/
        ├── config/
        ├── controllers/
        ├── middlewares/
        ├── models/
        ├── routes/
        └── services/
```

## Executar o aplicativo

Requisitos: Node.js e dependências compatíveis com o Expo SDK 51 definido no projeto.

```bash
cd GerenciadorDeFundos
npm install
```

Crie o arquivo local `.env` a partir de `.env.example`. Ajuste `EXPO_PUBLIC_API_URL` para o endereço da API acessível pelo dispositivo e execute:

```bash
npx expo start
```

Em um telefone físico, use o IP local do computador que hospeda a API. Nesse caso, `localhost` aponta para o próprio telefone.

## Executar a API

```bash
cd GerenciadorDeFundos/api
npm install
```

Crie `.env` a partir de `.env.example`, configure MySQL, JWT, OAuth e Brapi, e inicie:

```bash
npm run dev
```

Use apenas valores próprios. Nunca publique senhas, tokens ou segredos OAuth.
