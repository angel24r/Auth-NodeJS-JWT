
# 🛡️ Node.js JWT Authentication API with MySQL

This is a simple and secure backend API built with **Node.js**, **Express**, **MySQL**, and **Sequelize**, featuring **JWT-based authentication**. It provides essential user authentication endpoints and a clean foundation for adding more features.

## 🚀 Features

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Protected route to get current user info
- ✅ Logout (handled by client)
- 🧱 Sequelize ORM integration with MySQL

## 📁 Project Structure

```
.
├── controllers/        # Business logic
├── middleware/         # JWT auth middleware
├── models/             # Sequelize models
├── routes/             # API route definitions
├── .env                # Environment variables
├── server.js           # Entry point
```

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root and add your database and JWT info:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
```

### 4. Run the server

```bash
node server.js
```

The server will start on `http://localhost:3000`.

---

## 📬 API Endpoints

| Method | Route             | Description             | Auth Required     |
|--------|------------------|--------------------------|-------------------|
| POST   | /api/auth/register | Register a new user     | ❌                |
| POST   | /api/auth/login    | Log in and get token    | ❌                |
| GET    | /api/auth/me       | Get current user info   | ✅ (Bearer Token) |
| POST   | /api/auth/logout   | Logout (client handles) | ✅                |

---

## 📝 Future Plans

- Role-based access control

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JSON Web Tokens (JWT)
- dotenv, bcryptjs

## 🧾 License

MIT — feel free to use, modify, and share!
