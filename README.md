# School Management API

This is a RESTful API built using **Express.js**, **Sequelize ORM**, and **MySQL** to manage Students, Courses, and Teachers. It includes full CRUD operations, **JWT Authentication**, Swagger API documentation, and a Faker-based database seeder.

---

## 📦 Features

- 🧑‍🎓 CRUD for Students
- 🧑‍🏫 CRUD for Teachers
- 📘 CRUD for Courses
- 🔐 **JWT Authentication** (Register/Login)
- 🛡️ **Protected Routes** with JWT middleware
- 🔁 Associations:
  - One Teacher teaches many Courses
  - Many Students enroll in many Courses (Many-to-Many)
- 📚 **Swagger documentation** with JWT security (`/docs`)
- 🧪 Faker.js seeder for generating test data

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/KimangKhenng/school-api.git
cd school-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure `.env`

Create a `.env` file in the root:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_db
DB_PORT=3306
PORT=3000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

### 4. Run the Server

```bash
npm start
```

Visit: [http://localhost:3000/docs](http://localhost:3000/docs)

---

## 🔐 Authentication

### Register a new user
```bash
POST /auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```bash
POST /auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Access Protected Routes
Add the JWT token to the Authorization header:
```bash
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📂 Project Structure

```
.
├── src/
│   ├── index.js
│   ├── config/
│   │   ├── db.config.js
│   │   └── swagger.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── student.controller.js
│   │   ├── teacher.controller.js
│   │   └── course.controller.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── index.js
│   │   ├── user.model.js
│   │   ├── student.model.js
│   │   ├── teacher.model.js
│   │   └── course.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── student.routes.js
│   │   ├── teacher.routes.js
│   │   └── course.routes.js
│   └── seed.js
├── package.json
├── .env
└── README.md
```

---

## 🧪 Seeding Fake Data

To populate the database with fake students, courses, and teachers using Faker.js:

```bash
npm run seed
```

This will:
- Recreate all tables
- Insert 5 teachers, 10 courses, and 20 students
- Enroll students in random courses

---

## 📘 API Documentation

Swagger UI is available at:

```
http://localhost:3000/docs
```

### Available Endpoints:

#### Authentication (No JWT required)
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

#### Protected Routes (JWT required)
- `GET /auth/users` - Get all users
- `GET /students` - Get all students
- `POST /students` - Create a student
- `GET /students/:id` - Get student by ID
- `PUT /students/:id` - Update student
- `DELETE /students/:id` - Delete student
- `GET /teachers` - Get all teachers
- `POST /teachers` - Create a teacher
- `GET /teachers/:id` - Get teacher by ID
- `PUT /teachers/:id` - Update teacher
- `DELETE /teachers/:id` - Delete teacher
- `GET /courses` - Get all courses
- `POST /courses` - Create a course
- `GET /courses/:id` - Get course by ID
- `PUT /courses/:id` - Update course
- `DELETE /courses/:id` - Delete course

---

## ⚙️ Scripts

| Script        | Description                      |
|---------------|----------------------------------|
| `npm start`   | Start the production server      |
| `npm run dev` | Start the development server     |
| `npm run seed`| Seed database with Faker.js     |

---

## 🧑‍💻 Technologies Used

- **Express.js** - Web framework
- **Sequelize ORM** - Database ORM
- **MySQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Swagger** (swagger-jsdoc + swagger-ui-express) - API documentation
- **Faker.js** - Test data generation
- **dotenv** - Environment variables

---

## � Security Features

- **Password Hashing** with bcryptjs
- **JWT Token Authentication** with expiration
- **Protected Routes** with middleware
- **Environment Variables** for sensitive data

---

## 📄 License

MIT
