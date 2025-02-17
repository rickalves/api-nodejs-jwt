# 📌 API de Autenticação com JWT e MongoDB

## 📖 Descrição
Esta API implementa um sistema de **autenticação segura** com **JWT** e **MongoDB**, incluindo funcionalidades como:
- 🔑 **Login e geração de tokens JWT**
- 🚪 **Logout e invalidação de tokens** (Blacklist persistente no MongoDB)
- 👤 **Proteção de rotas com autenticação**
- 🛡️ **Controle de acesso para administradores e usuários comuns**

## 🚀 Tecnologias Utilizadas
- **Node.js** + **Express** (Backend)
- **JWT (JSON Web Token)** (Autenticação)
- **MongoDB + Mongoose** (Armazenamento da blacklist de tokens)
- **Sequelize + PostgreSQL** (Banco de dados relacional para usuários)
- **Dotenv** (Gerenciamento de variáveis de ambiente)

---

## ⚙️ Instalação e Configuração
### 📌 **1️⃣ Clonar o Repositório**
```bash
git clone https://github.com/seu-usuario/api-nodejs-jwt.git
cd api-nodejs-jwt
```

### 📌 **2️⃣ Instalar Dependências**
```bash
npm install
```

### 📌 **3️⃣ Configurar as Variáveis de Ambiente**
Crie um arquivo **.env** na raiz do projeto e configure os valores conforme necessário:
```env
PORT=3000
JWT_SECRET=sua_chave_secreta
MONGO_URI=mongodb://localhost:27017/api_auth_db
DB_NAME=api_db
DB_USER=usuario
DB_PASS=senha
DB_HOST=localhost
DB_DIALECT=postgres
```

### 📌 **4️⃣ Iniciar o Servidor**
```bash
npm run dev
```
---

## 🔑 **Autenticação e Controle de Acesso**
A API protege rotas com **JWT**, garantindo que apenas usuários autenticados possam acessá-las.

### 🟢 **Rota de Login**
- **POST** `/auth/login`
- **Body:**
  ```json
  {
    "email": "usuario@email.com"
  }
  ```
- **Resposta:**
  ```json
  {
    "accessToken": "TOKEN_JWT",
    "refreshToken": "TOKEN_REFRESH"
  }
  ```

### 🛑 **Rota de Logout** (Invalidação de Token)
- **POST** `/auth/logout`
- **Headers:** `Authorization: Bearer TOKEN`
- **Resposta:**
  ```json
  {
    "message": "Logout realizado com sucesso!"
  }
  ```

### 🔐 **Proteção de Rotas**
Para acessar rotas protegidas, envie o **token JWT** no cabeçalho `Authorization`:
```bash
Authorization: Bearer TOKEN
```
- **GET** `/user/profile` → Apenas usuários autenticados
- **GET** `/admin/dashboard` → Apenas administradores

---

## 📌 **Gerenciamento da Blacklist no MongoDB**
Os tokens invalidados são armazenados no **MongoDB** e removidos automaticamente após **1 hora**.

### 🟢 **Modelo da Blacklist (`models/Blacklist.js`)**
```javascript
const mongoose = require('mongoose');
const BlacklistSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now, expires: 3600 } // Expira automaticamente
});
module.exports = mongoose.model('Blacklist', BlacklistSchema);
```

---

## 📌 **Testes no Postman**
1. **Login** → Obtenha um token JWT
2. **Acesse uma rota protegida** usando o token
3. **Faça logout** → O token será invalidado
4. **Tente acessar novamente** → O acesso será negado

---

## 📌 **Melhorias Futuras** 🚀
✅ Logs de atividades para melhor monitoramento
✅ Recuperação de senha via e-mail

---

## 📌 Licença
📜 Este projeto está sob a licença **MIT**. Sinta-se livre para utilizá-lo e melhorá-lo!

---

💡 **Dúvidas ou Sugestões?** Abra uma issue ou contribua com o projeto! 😃

