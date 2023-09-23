[☞ English (英文)](README.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[☞ Chinese (中文)]()

# Backend for AYWEBJS 

AYWEBJS is a full-stack website constructed using React, Node.js, and MySQL. The platform showcases a range of articles and tailors content accessibility based on user privileges. The interface features a left-side navigation bar that follows a predetermined folder structure, listing both site navigation options and article locations.

## Features

- **Separation of Concerns**: The division between routes and handlers modularizes the code, enhancing its readability and maintainability.
  
- **User Permission Management**: JWT (Json Web Token) is employed for user authentication. This ensures articles are displayed based on varying user privileges.
  
- **Modular Architecture**: Adherence to modular design principles guarantees each component’s functionality is transparent, testable, and reusable.

## Database Structure

### User Table

Records user-specific details including username, password hash, salt, access level, first and last name, and registration date.

### Category Table

Archives information related to article categories. Note: A category can have a parent category.

### Article Table

Contains article data such as title, category, required access level, tags, publication date, last edited date, author, and content.

## Project Structure

```
aywebjs/
│
├── README.md
├── .env                      // Environment configuration file containing sensitive data
│
├── config
│   ├── db.config.js          // Database configuration sourced from .env
│   └── jwt.config.js         // JWT configuration sourced from .env
│
├── handlers
│   ├── article.handler.js    // Functions handling article retrieval requests
│   ├── category.handler.js   // Functions managing HTTP requests related to Category
│   └── user.handler.js       // Functions processing user registration and login requests
│
├── middlewares
│   └── verifyToken.js        // Middleware function verifying JWT tokens in requests
│
├── models
│   ├── article.model.js      // Database operations associated with articles, e.g., retrieval by user level
│   ├── category.model.js     // Database operations related to the Category table
│   └── user.model.js         // User model operations like new user creation and retrieval by username
│
├── routes
│   ├── article.routes.js     // Configuration for routes related to articles, e.g., article retrieval
│   ├── category.routes.js    // Configuration for routes related to Category
│   └── user.routes.js        // Configuration for user-centric routes, e.g., registration and login
│
├── scripts
│   └── userManagement.js     // Script to insert new users and modify user levels
│
├── server.js                 // Project's entry point that sets up the Express app, DB connections, CORS, Body Parser, and routes. Also initiates the server.
│
└── utils
    └── db.utils.js           // Management of MySQL database connection pool
```

## Quick Start

1. **Clone the repository**:

   ```bash
   git clone https://github.com/aynorway/aywebjs.git
   ```

2. **Install dependencies**:

   ```bash
   cd aywebjs
   npm install
   ```

3. **Set up environment variables**:

   Populate the `.env` file with database and JWT keys.

4. **Kickstart the server**:

   ```bash
   npm start
   ```

   The server will be up and running at [http://localhost:3000](http://localhost:3000).

## Miscellaneous

- **package.json**: This file contains the project's npm configuration, detailing dependencies, scripts, and more.

## Contributing

I appreciate contributions! Feel free to raise issues or submit pull requests.

## License

AYWEBJS is licensed under the MIT License.