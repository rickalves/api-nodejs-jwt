# 🔐 API de Autenticação com JWT (Node.js, Express, Sequelize, PostgreSQL)

Esta API foi desenvolvida para demonstrar um sistema de **autenticação segura utilizando JSON Web Token (JWT)**. Ela permite **login de usuários, acesso a rotas protegidas, permissões de usuário, alteração de senha e refresh token**.

## 🚀 Tecnologias Utilizadas
- ⚡ **Node.js** - Ambiente de execução JavaScript no backend.
- 🏗️ **Express.js** - Framework minimalista para Node.js.
- 🛢️ **Sequelize** - ORM para interação com bancos SQL.
- 🗄️ **PostgreSQL** - Banco de dados utilizado.
- 🔑 **JWT (JSON Web Token)** - Para autenticação segura.
- 🔒 **Bcrypt.js** - Para criptografar senhas.
- 🛠️ **Dotenv** - Para gerenciar variáveis de ambiente.

---

## 📌 Instalação e Configuração
### **1️⃣ Clonar o repositório**
```bash
git clone https://github.com/seu-usuario/autenticacao-jwt.git
cd autenticacao-jwt
```

### **2️⃣ Instalar dependências**
```bash
npm install
```

### **3️⃣ Configurar variáveis de ambiente**
Crie um arquivo **.env** na raiz do projeto e adicione:
```env
DB_NAME=seu_banco
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_HOST=localhost
DB_DIALECT=postgres
JWT_SECRET=sua_chave_secreta
```

### **4️⃣ Executar o servidor**
```bash
npm run dev
```
A API rodará em **http://localhost:3000**.

---

## 📌 Rotas da API
### 🔹 **1️⃣ Login e Autenticação**
- 🔑 **`POST /auth/login`** - Gera um token JWT para um usuário existente.

**Exemplo de Body (JSON):**
```json
{
  "email": "usuario@email.com"
}
```
**Resposta:**
```json
{
  "token": "eyJhbGciOiJIUzI1..."
}
```

---

### 🔹 **2️⃣ Rota Protegida (`/user/profile`)**
- 🔒 **`GET /user/profile`** - Retorna os dados do usuário autenticado.

**Cabeçalho necessário:**
```yaml
Authorization: Bearer SEU_TOKEN_AQUI
```
**Resposta:**
```json
{
  "id": 1,
  "name": "Usuário Teste",
  "email": "usuario@email.com"
}
```

---

### 🔹 **3️⃣ Alterar Senha**
- 🔄 **`POST /user/change-password`** - Permite que o usuário altere sua senha.

**Exemplo de Body (JSON):**
```json
{
  "oldPassword": "senha_atual",
  "newPassword": "nova_senha"
}
```
**Resposta:**
```json
{
  "message": "Senha alterada com sucesso!"
}
```

---

### 🔹 **4️⃣ Refresh Token**
- 🔄 **`POST /auth/refresh`** - Gera um novo access token quando o atual expira.

**Exemplo de Body (JSON):**
```json
{
  "token": "seu_refresh_token"
}
```
**Resposta:**
```json
{
  "accessToken": "novo_access_token"
}
```

---

## 📌 Melhorias Futuras 🚀
✅ 🔐 Logout (invalidar tokens)
✅ 📩 Recuperação de senha via e-mail
✅ 📊 Melhor estrutura de logs e monitoramento

---

## 📌 Licença
📜 Este projeto está sob a licença **MIT**. Sinta-se livre para utilizá-lo e melhorá-lo!

---

💡 **Dúvidas ou Sugestões?** Abra uma issue ou contribua com o projeto! 😃

