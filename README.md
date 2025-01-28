```markdown
# Community Platform

A full-stack web application for managing communities, posts, comments, likes, and chat functionalities. Built with **Prisma**, **TypeScript**, **Node.js**, and **React**.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Prisma Workflow](#prisma-workflow)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Features

- User Authentication (Registration, Login, Password Hashing)
- Create and manage communities
- Post creation, commenting, and likes
- Real-time chat with rooms and messaging
- Call functionality (audio and video)
- Zod-based form validation

---

## Tech Stack

### Backend
- **Node.js** with **TypeScript**
- **Prisma** (ORM for PostgreSQL)
- **Express.js**
- **bcrypt** for password hashing
- **Zod** for validation

### Frontend
- **React** with **TypeScript**
- **Redux** for state management
- **TailwindCSS** for styling
- **React Router** for navigation

---

## Installation

### Backend Setup

1. Clone the repository and navigate to the backend directory:
   ```bash
   git clone https://github.com/your-repo-name.git
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the **backend** directory with the following content:
   ```env
   DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>"
   PORT=5000
   JWT_SECRET="your_jwt_secret"
   ```

4. Generate the Prisma Client:
   ```bash
   npx prisma generate
   ```

5. Apply migrations to the database:
   ```bash
   npx prisma migrate dev --name init
   ```

6. Start the backend server:
   ```bash
   npm run dev
   ```

The backend server will run at `http://localhost:5000`.

---

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the **frontend** directory with the following content:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

The frontend server will run at `http://localhost:3000`.

---

## Prisma Workflow

1. Modify the schema file located at `prisma/schema.prisma`.
2. Generate the Prisma Client after modifying the schema:
   ```bash
   npx prisma generate
   ```
3. Apply migrations to the database:
   ```bash
   npx prisma migrate dev --name migration_name
   ```
4. (Optional) Open Prisma Studio to view and manage your database:
   ```bash
   npx prisma studio
   ```

---

## Folder Structure

### Backend
```
backend/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── middlewares/
│   ├── controllers/
│   ├── routes/
│   ├── utils/
│   └── server.ts
└── package.json
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── features/
│   ├── hooks/
│   ├── utils/
│   └── App.tsx
└── package.json
```

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you like.