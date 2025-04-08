Perfect! Here's your updated and complete `README.md` for **Day 3**, including your actual GitHub repo link and instructions with `cd`:

---

# 📝 Notes API with User Login - Node.js, Express & MongoDB

Welcome to **Day 3** of my **10 Days of Node.js/Express/MongoDB** series!

This is a secure and user-based **Notes API** built with **JWT Authentication**, allowing users to **register**, **login**, and **perform CRUD operations on their personal notes**.

---

## 🚀 Features

- ✅ User Registration & Login with hashed passwords
- 🔐 Protected Routes using JWT middleware
- 🧑‍💼 User-based Notes (Create, Read, Update, Delete)
- 📄 Notes Schema: `{ title, content, userId }`
- 🔑 Token-based session handling
- ☁️ MongoDB connection via environment variables

---

## 🧠 Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (`jsonwebtoken`)
- bcryptjs
- dotenv

---

## 📁 Folder Structure

```
notes-api/
├── models/
│   ├── User.js
│   └── Note.js
├── middleware/
│   └── auth.js
├── index.js
├── .env
├── package.json
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/Y0GESHSHINDE/Day-3-Notes-App-with-User-Login.git
cd Day-3-Notes-App-with-User-Login
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```
MONGO_URI=mongodb://127.0.0.1:27017/notesdb
PORT=5000
JWT_SECRET=yourSecretKey
```

4. **Start the server**
```bash
npm run dev
```

Server will run at:  
👉 `http://localhost:5000`

---

## 📬 API Endpoints

### 👤 Auth Routes

| Method | Endpoint        | Description           |
|--------|-----------------|-----------------------|
| POST   | `/api/register` | Register a new user   |
| POST   | `/api/login`    | Login and get a token |

---

### 📝 Notes Routes (Protected)

| Method | Endpoint          | Description                   |
|--------|-------------------|-------------------------------|
| GET    | `/api/notes`      | Get all notes of the user     |
| GET    | `/api/notes/:id`  | Get single note by ID         |
| POST   | `/api/notes`      | Create a new note             |
| PUT    | `/api/notes/:id`  | Update note (must be owned)   |
| DELETE | `/api/notes/:id`  | Delete note (must be owned)   |

**🔐 Important:** Add JWT in headers:  
```
Authorization: Bearer <your_token>
```

---

## 🧪 Sample JSON for POST /api/notes

```json
{
  "title": "Meeting Notes",
  "content": "Discuss project milestones and tasks."
}
```

---

## 🔥 Learning Goal

This project is part of my **#10Days10Projects** challenge to master backend development using Node.js, Express, and MongoDB — with real-world use cases like authentication and user-specific access.



## 🧑‍💻 Author

**Yogesh Shinde**  
🐙 GitHub: [@y0geshshinde](https://github.com/y0geshshinde)  
🔗 LinkedIn: [@y0geshshinde](https://linkedin.com/in/y0geshshinde)

---

Let me know if you want this added directly into your repo or want a `README.md` file to upload manually.
