<<<<<<< HEAD
# School Management API

This is a RESTful API built using **Express.js**, **Sequelize ORM**, and **MySQL** to manage Students, Courses, and Teachers. It includes full CRUD operations, Swagger API documentation, and a Faker-based database seeder.

---

## 📦 Features

- 🧑‍🎓 CRUD for Students
- 🧑‍🏫 CRUD for Teachers
- 📘 CRUD for Courses
- 🔁 Associations:
  - One Teacher teaches many Courses
  - Many Students enroll in many Courses (Many-to-Many)
- 📚 Swagger documentation (`/api-docs`)
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
```

### 4. Run the Server

```bash
npm run dev
```

Visit: [http://localhost:3000/docs](http://localhost:3000/api-docs)

---

## 📂 Project Structure

```
.
├── index.js
├── config
│   └── swagger.js
├── controllers
│   ├── student.controller.js
│   ├── teacher.controller.js
│   └── course.controller.js
├── models
│   └── index.js
├── routes
│   ├── student.routes.js
│   ├── teacher.routes.js
│   └── course.routes.js
├── seed.js
└── .env
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
http://localhost:3000/api-docs
```

It includes all CRUD endpoints for:

- `/students`
- `/teachers`
- `/courses`

---

## ⚙️ Scripts

| Script        | Description            |
|---------------|------------------------|
| `npm start`   | Start the server       |
| `node seed.js`| Seed database with Faker.js |

---

## 🧑‍💻 Technologies Used

- Express.js
- Sequelize ORM
- MySQL
- Swagger (swagger-jsdoc + swagger-ui-express)
- Faker.js
- dotenv

---

## 📄 License

MIT
=======
# school_apiweek9
>>>>>>> f89c5a6d72e9cb2cce30578d9d72936fa4ed2cde
