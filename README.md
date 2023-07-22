# Full-Stack-Habit-Tracker-App
# Habit Tracker

Habit Tracker is a web application that allows users to track their habits on a daily basis. It provides a simple and intuitive user interface for adding, managing, and viewing habits, along with their completion status for each day of the week.



## Features

- Add new habits with customizable names.
- Track habit completion status for each day of the week.
- View habits and their completion status for the entire week.
- Mark habits as done, undone, or none for each day.

## Frontend

The frontend of the application is built using [React](https://reactjs.org/), a popular JavaScript library for building user interfaces. It uses [Redux](https://redux.js.org/) for state management to keep track of the user's habits and their completion status. [React Router](https://reactrouter.com/) is used for handling different routes and navigation within the application.

### Installation

To run the frontend of the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the 'frontend' directory.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server. The application will automatically open in your default web browser at `http://localhost:3000`.

### Usage

Once the frontend server is running, you can access the Habit Tracker web application in your web browser at `http://localhost:3000`. You can start adding new habits, tracking their completion status, and viewing them for the week.

## Backend

The backend of the application is built using [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/), providing a RESTful API to interact with the MongoDB database. The application uses [Mongoose](https://mongoosejs.com/) as the Object Data Modeling (ODM) library to interact with the database and manage habit data.

### Installation

To run the backend of the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the 'backend' directory.
3. Run `npm install` to install the required dependencies.
4. Set up a MongoDB database (either locally or using MongoDB Atlas) and obtain the connection URI.
5. Replace the `<password>` in the connection URI with your actual MongoDB password.
6. Run `npm start` to start the backend server. The server will be running on `http://localhost:5000`.

### Usage

Once the backend server is running, it will listen for incoming requests on `http://localhost:5000`. The frontend of the application will automatically interact with the backend API to perform CRUD operations for habits.

## Running Frontend and Backend Together

To run the frontend and backend together, follow these steps:

1. Start your MongoDB database (either locally or using MongoDB Atlas).
2. Open a terminal and navigate to the 'backend' directory.
3. Run `npm install` to install backend dependencies.
4. Run `npm start` to start the backend server.
5. Leave the backend server running, and open another terminal.
6. Navigate to the 'frontend' directory.
7. Run `npm install` to install frontend dependencies.
8. Run `npm start` to start the frontend development server.
9. The application will automatically open in your default web browser at `http://localhost:3000`, and it will interact with the backend server on `http://localhost:5000`.

### Contributing

Contributions to the Habit Tracker project are welcome! If you find any bugs or have suggestions for new features, feel free to [open an issue](https://github.com/Sk4524/Full-Stack-Habit-Tracker-App/issues) or submit a [pull request](https://github.com/Sk4524/Full-Stack-Habit-Tracker-App/pulls).

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to modify this README to suit your specific project details. Happy coding!
