# Polling System

A simple API-based polling system using Node.js and Sequelize with a PostgreSQL database.

## Features

- Create and manage questions with options.
- Add votes to options.
- Delete questions (with optional constraints).
- Delete options (with optional constraints).
- View questions with options and votes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Database Models](#database-models)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/polling-system.git

2. Install dependencies:

   ```bash
   cd polling-system
   npm install

3. Set up your PostgreSQL database and configure the database connection in:

   ```bash
   models/sequelize.js

4. Start the server:

   ```bash
   node app.js

## Usage

- Create questions using the /questions/create API endpoint.
- Add options to a question using the /questions/:id/options/create API endpoint.
- Add votes to options using the /options/:id/add_vote API endpoint.
- Delete questions using the /questions/:id/delete API endpoint (optional: based on constraints).
- Delete options using the /options/:id/delete API endpoint (optional: based on constraints).
- View a question with its options and votes using the /questions/:id API endpoint.


## Database Models

Two database tables are used:

1. Question
    - question: The question text.
      Example: "What's your favorite color?"

2. Option
    - option: The option text.
    - votes: The number of votes for the option.
    - question_id: Foreign key linking to the associated question.

## Contributing

Contributions are welcome! Please follow these guidelines:

- Fork the repository.
- Create a branch for your feature/bug fix.
- Commit your changes with meaningful messages.
- Push your branch to your fork.
- Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.


