# Voting Poll Application
==========================

This is a simple Voting Poll Application built using Node.js, Express.js, MongoDB and Mongoose.

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm start`

## Environment Variables

The application uses the following environment variables:

* `DATABASE_URL`: The connection string for the MongoDB database
* `PORT`: The port number for the application to listen on (default is 4000)

## API Endpoints

The application has the following API endpoints:

* `POST /createTodo`: Creates a new todo item
* `GET /getTodo`: Retrieves all todo items
* `GET /getTodo/:id`: Retrieves a specific todo item
* `PUT /updateTodo/:id`: Updates a specific todo item
* `DELETE /deleteTodo/:id`: Deletes a specific todo item

## Run Tests

To run the tests, run `npm test`

## Deployment

The application can be deployed to Heroku using the following steps:

1. Create a new Heroku app
2. Set the `DATABASE_URL` environment variable
3. Deploy the application using `git push heroku master`

## License

The application is licensed under the MIT License. See the `LICENSE` file for more information.

## Author

The application was built by [Your Name] (https://github.com/your-username)

## Acknowledgments

* The application uses the following libraries:
	+ Express.js (https://expressjs.com/)
	+ Mongoose (https://mongoosejs.com/)
	+ MongoDB (https://www.mongodb.com/)
	+ Heroku (https://www.heroku.com/)
