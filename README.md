# Fullstack - Web App To save Books
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,express,webpack,mongodb,neovim" />
  </a>
</p>

I created this full-stack application at the beginning of 2020 as a practical project to handle information about books. While it's a relatively straightforward application, it serves as an excellent resource for practicing full-stack development skills. This project allows users to add and delete book posts, storing the information in a MongoDB database. Feel free to explore, contribute, or use this project as a learning tool!

## Technologies Used
List the main technologies, frameworks, and languages used in the project:
- Node.js
- Express.js
- MongoDB
- Webpack

## Screenshots
<!-- First Screenshot-->
![App-Screenshot](/screenshots/01.png)

## Features
  Describe the key features and functionalities of the web app, such as:
  - Add and delete posts of books
  - Interaction with a MongoDB database
  - Any other notable functionalities or features

## Installation
### Prerequisites
  - Node.js installed
  - MongoDB installed and running

  1. Clone the repository: 

      ```bash
      git clone https://github.com/dylanroman03/Fullstack.git
      ```

  2. Install dependencies:

      ```bash
      cd fullstack && npm install
      ```

### Running Locally
  Start the bakend server:

  ```bash
  npm run dev
  ```

  This will start the backend server using nodemon in development mode.
  Access the web app in your browser at `http://localhost:4000` or the specified port.

## Deployment
  To deploy the project:
  1. Set the environment to production:

      ```bash
      npm run build
      ```

  2. Start the production server:

      ```bash
      npm start
      ```

  This will start the backend server in production mode.

## Environment Variables
  Remember to set the following environment variables in your .env file:
  - `MONGODB_URI`: The URI of your MongoDB database

For further details on configuration and project structure, refer to the project's codebase.


## Additional Notes
I developed this project in 2020 and am now updating the README in late 2023, nearing 2024. Over time, there have been significant updates to various dependencies and packages used in this project. As a result, there might be instances of incompatibility issues arising due to newer versions of these dependencies.

If you encounter any errors related to incompatible dependencies, you might try running the following commands to address them temporarily:

`npm audit fix --force`


`npm audit fix`

Please note that while these commands may resolve some issues, That's not the best way. I haven't had the opportunity to thoroughly test for compatibility with the latest package versions. 

Feel free to explore the project, report any bugs you encounter, and contribute by addressing these issues.
