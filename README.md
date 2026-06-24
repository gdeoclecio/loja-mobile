# 📱 Loja Mobile - Copa 2026

Aplicativo mobile desenvolvido em React Native durante a Residência TIC Serratec.

---

## 👥 Integrantes

- Gabriela Carvalho
- Roberta Rocha
- Daniel Valle
- Leonardo de Mattos
- Vitor Marcelino

---

## 🚀 Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Axios
- AsyncStorage
- Context API (AuthContext + ThemeContext)
- Git e GitHub

---

## 📋 Funcionalidades

### 🔐 Autenticação
- Tela de login com validação de credenciais
- Persistência de sessão utilizando AsyncStorage
- Controle global de autenticação através de AuthContext

### 📦 Produtos
- Listagem de produtos consumindo API REST
- Cadastro de novos produtos
- Edição de produtos existentes
- Exclusão de produtos
- Consumo de API utilizando Axios

### 🌙 Acessibilidade
- Implementação de Dark Mode
- Alternância de tema utilizando ThemeContext (separado do AuthContext)

### 🧭 Navegação
- Navegação entre múltiplas telas utilizando React Navigation
- Rotas protegidas por autenticação

---

## 📱 Telas do Sistema

- Login
- Home
- Produtos
- Novo Produto
- Editar Produto

---

## 🔗 API Utilizada

Este aplicativo consome a API REST do projeto Loja Copa 2026, responsável pela autenticação de usuários e gerenciamento dos produtos.

Repositório da API: https://github.com/gdeoclecio/api-loja

---

## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/gdeoclecio/loja-mobile
cd loja-mobile
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar a API

mvn spring-boot:run


### 4. Expor a API com ngrok (necessário para APK)
  
ngrok http 8080

Copie a URL gerada (ex: `https://abc123.ngrok-free.app`) e atualize o arquivo `src/services/api.ts`:
 
const api = axios.create({
  baseURL: "https://abc123.ngrok-free.app",
});


### 5. Executar o projeto

npx expo start


### 6. Executar no celular
- Instalar o **Expo Go**
- Escanear o QR Code exibido no terminal



## 👤 Cadastro de Usuário

Antes do primeiro acesso, cadastre um usuário pelo endpoint:

**POST** `http://localhost:8080/auth/register`

json
{
  "username": "admin@gmail.com",
  "password": "123456"
}


---

## 📂 Estrutura do Projeto
src

├── contexts

│   ├── AuthContext.tsx

│   └── ThemeContext.tsx

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

---

## 🎯 Requisitos Atendidos

- ✔ React Navigation
- ✔ Context API (AuthContext + ThemeContext separados)
- ✔ AsyncStorage
- ✔ Axios
- ✔ CRUD Completo (GET, POST, PUT e DELETE)
- ✔ Autenticação
- ✔ Dark Mode
- ✔ Validação de Formulários
- ✔ Versionamento com Git e GitHub
- ✔ Build Android (APK)

---

## 📚 Projeto Acadêmico

Desenvolvido como atividade da disciplina de Aplicações Multiplataformas da Residência TIC Serratec.
