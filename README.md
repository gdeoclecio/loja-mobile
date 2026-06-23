# 📱 Loja Mobile - Copa 2026

Aplicativo mobile desenvolvido em React Native durante a Residência TIC Serratec.

## 👥 Integrantes

* Gabriela Carvalho
* Roberta Rocha
* Daniel Valle
* Leonardo de Mattos
* Vitor Marcelino

---

## 🚀 Tecnologias Utilizadas

* React Native
* Expo
* TypeScript
* React Navigation
* Axios
* AsyncStorage
* Context API
* Git e GitHub

---

## 📋 Funcionalidades

### 🔐 Autenticação

* Tela de login com validação de credenciais.
* Persistência de sessão utilizando AsyncStorage.
* Controle global de autenticação através de Context API.

### 📦 Produtos

* Listagem de produtos consumindo API REST.
* Cadastro de novos produtos.
* Edição de produtos existentes.
* Exclusão de produtos.
* Consumo de API utilizando Axios.

### 🌙 Acessibilidade

* Implementação de Dark Mode.
* Alternância de tema utilizando Context API.

### 🧭 Navegação

* Navegação entre múltiplas telas utilizando React Navigation.

---

## 📱 Telas do Sistema

* Login
* Home
* Produtos
* Novo Produto
* Editar Produto

---

## 🔗 Configuração da API

O projeto utiliza uma API REST local.

No arquivo `src/services/api.ts` configure o IP da máquina onde a API está sendo executada:


import axios from "axios";

const api = axios.create({
  baseURL: "http://SEU-IP:8080",
});

export default api;


### Atenção

* O celular e o computador devem estar na mesma rede Wi-Fi.
* Não utilize `localhost` ou `127.0.0.1`.
* Utilize o endereço IPv4 da máquina que executa a API.

Para descobrir o IP:


ipconfig


Procure por:


IPv4 Address . . . . . . . . : 192.168.x.x

## 👤 Criação de Usuário para Login

Antes de realizar o login no aplicativo, é necessário cadastrar um usuário na API.

### Endpoint


POST /auth/register


### Exemplo utilizando Postman

URL:

http://localhost:8080/auth/register


Body (JSON):


{
  "username": "admin@gmail.com",
  "password": "123456"
}


Após o cadastro ser realizado com sucesso, utilize as mesmas credenciais na tela de login do aplicativo:


Usuário: admin@gmail.com
Senha: 123456


### Observação

Caso a API esteja sendo executada em outra máquina ou dispositivo, substitua `localhost` pelo endereço IP correspondente.

Exemplo:

http://192.168.x.x:8080/auth/register



## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório


git clone URL_DO_REPOSITORIO


### 2. Entrar na pasta do projeto


cd loja-mobile


### 3. Instalar dependências


npm install


### 4. Executar o projeto


npx expo start


### 5. Executar no celular

* Instalar o Expo Go
* Escanear o QR Code exibido pelo Expo

-

## 📂 Estrutura do Projeto


src
├── assets
├── contexts
│   └── AuthContext
├── routes
├── screen
│   ├── Login
│   ├── Home
│   ├── Produtos
│   ├── NovoProduto
│   └── EditarProduto
├── services
│   └── api.ts
└── App.tsx
```

---

## 🎯 Requisitos Atendidos

* ✔ React Navigation
* ✔ Context API
* ✔ AsyncStorage
* ✔ Axios
* ✔ CRUD Completo (GET, POST, PUT e DELETE)
* ✔ Autenticação
* ✔ Dark Mode
* ✔ Validação de Formulários
* ✔ Versionamento com Git e GitHub
* ✔ Build Android (APK)

---

## 📚 Projeto Acadêmico

Desenvolvido como atividade da disciplina de React Native da Residência TIC Serratec.
