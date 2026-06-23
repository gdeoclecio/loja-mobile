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
## API Utilizada

Este aplicativo consome a API REST do projeto Loja Copa 2026, responsável pela autenticação de usuários e gerenciamento dos produtos.

Repositório da API:

https://github.com/gdeoclecio/api-loja

### Configuração da API

Antes de executar o aplicativo mobile, é necessário iniciar a API localmente.
comando para rodar api:  mvn spring-boot:run

A API deve estar em execução na porta:


http://localhost:8080


ou no endereço IP da máquina que estiver hospedando a API, conforme configurado no arquivo `src/services/api.ts` do aplicativo.

### Cadastro de Usuário

Antes do primeiro acesso, é necessário cadastrar um usuário utilizando o endpoint de registro.

**Método:**


POST /auth/register


**URL completa:**


http://localhost:8080/auth/register


**Body (JSON):**


{
  "username": "admin@gmail.com",
  "password": "123456"
}

Após o cadastro, utilize as mesmas credenciais na tela de login do aplicativo.

### Fluxo de Execução

1. Clonar e executar a API.
2. Realizar o cadastro do usuário pelo endpoint `/auth/register`.
3. Confirmar que a API está em execução na porta `8080`.
4. Executar o aplicativo React Native.
5. Realizar login utilizando as credenciais cadastradas.
6. Utilizar normalmente as funcionalidades de listagem, cadastro, edição e exclusão de produtos.


### Atenção

* O celular e o computador devem estar na mesma rede Wi-Fi.
* Não utilize `localhost` ou `127.0.0.1`.
* Utilize o endereço IPv4 da máquina que executa a API.

Para descobrir o IP:


ipconfig


Procure por:


IPv4 Address . . . . . . . . : 192.168.x.x


### Observação

Caso a API esteja sendo executada em outra máquina ou dispositivo, substitua `localhost` pelo endereço IP correspondente.

Exemplo:

http://192.168.x.x:8080/auth/register



## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório


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
