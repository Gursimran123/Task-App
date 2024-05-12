# Frontend

The frontend of the task management app is built using React. It consists of several components and pages to manage tasks and user authentication.

# Folder Structure

1. src/components: Contains reusable UI components such as Navbar, Login, Signup, AddForm, and UpdateForm.
2. src/pages: Contains the main pages of the application, including Home, Task, and TaskDetails.
3. src/App.jsx: The main entry point of the React application, where routes are defined using React Router.
4. src/main.jsx: Renders the App component into the root HTML element.

# Functionality

1. User Authentication: Users can sign up and log in to access the task management features.
2. Task Management: Users can view, add, update, and delete tasks. Tasks are fetched from and saved to the backend server.

# Backend

The backend of the task management app is built using Node.js with Express. It provides RESTful API endpoints for managing tasks and user authentication.

# Folder Structure

1. server/routes: Contains route handlers for different API endpoints, including tasks and users.
2. server/controllers: Contains controller functions to handle business logic for tasks and users.
3. server/models: Defines Mongoose schemas for tasks and users, which are used to interact with MongoDB.
4. server/db.js: Sets up the connection to the MongoDB database using Mongoose.

# Functionality

1. Task Management API: Provides endpoints to perform CRUD operations on tasks, including creating, reading, updating, and deleting tasks.
2. User Authentication: Implements user registration and login functionality using bcrypt for password hashing and JWT for token-based authentication.
3. Middleware: Includes middleware functions for verifying JWT tokens to authenticate and authorize users before accessing protected routes.

# Getting Started

To run the task management app locally, follow these steps:

1. Clone the repository: git clone https://github.com/your-username/task-management-app.git
2. Install dependencies for both frontend and backend:

3. Frontend: cd client && npm install
4. Backend: cd server && npm install
5. Start the frontend and backend servers:
6. Frontend: cd client && npm run dev
7. Backend: cd server && node index.js

Open your browser and go to http://localhost:3000 to view the app.

# Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

# Fork the repository.
Create a new branch: git checkout -b feature/my-feature.
Make your changes and commit them: git commit -m 'Add new feature'.
Push to the branch: git push origin feature/my-feature.
Submit a pull request.