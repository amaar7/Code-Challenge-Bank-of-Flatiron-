# Bank of Flatiron - React Application

## Table of Contents
- [Project Overview](#project-overview)
- [Project Setup](#project-setup)
- [Core Deliverables](#core-deliverables)
- [Bonus Deliverables](#bonus-deliverables)
- [Getting Started](#getting-started)
- [Development](#development)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [License](#license)

## Project Overview

This project is a React application that displays a list of your recent bank transactions, among other features. Users can view a table of transactions, submit new transactions, and filter transactions by description. Additionally, there are bonus features to sort and delete transactions.

## Project Setup

To set up the project, follow these steps:

1. Create a new project folder.
2. Create a new private GitHub repository for your project.
3. Add your Technical Mentor as a contributor to the repository.
   (This is only for grading purposes; we promise not to steal your code!)
4. Regularly commit your code to the repository.

## Core Deliverables

As a user, you can:

- View a table of all transactions.
- Fill out and submit the form to add a new transaction (the new transaction does not have to be persisted to the backend).
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

## Bonus Deliverables

These bonus deliverables are optional but provide an extra challenge:

- Sort transactions alphabetically by category or description.
- Delete a transaction, which will remove it from the table.

## Getting Started

To get started with this project, you will need to set up a local JSON DB server with the provided data. Here's how:

1. Create a `db.json` file in your project directory.
2. Use the provided data from [this URL](http://localhost:8001/transactions) for your server DB.
3. Run the following command to start the backend server:
4. Test your server by visiting this route in the browser:
[http://localhost:8001/transactions](http://localhost:8001/transactions)

## Development

To start developing this project, clone the repository and install the necessary dependencies:

```shell
git clone <repository-url>
cd <project-folder>
npm install
the last thing is...
npm start
