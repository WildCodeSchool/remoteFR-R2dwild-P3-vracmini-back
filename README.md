Minimal Vrac - Backend

Configuration ⚙️
Copy the .envSample file and renaming it .env

Edit the .env file with:

DB_HOST : Local host
DB_USER : the database user
DB_PASSWORD : the database password
DB_NAME : the name of the database

Package.json commandes📜
Start in production mode
$ npm start


dependencies: 
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.2.5"
    "bcryptjs": "^2.4.3",