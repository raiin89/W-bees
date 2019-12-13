# w-bees

> Backend for W-bees POC


## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    npm run setup
    ```

3. Copy your database details to the .env file as example provided below
    ```
    DB_HOST=localhost
    DB_PORT=3306    
    DB_USER=root1
    DB_PASS=root
    DB_NAME=bees
    ```
4. Start your app in dev mode

    ```
    npm run dev
    ```
    Both backend and frontend will run simultaneously. Backend on PORT=3030 & Fronend on PORT=4200
    To run seperately use the following commands:
        1. To run backend: `npm run start:server`
        2. To run frontend: `npm run start:client`

5. Building the application
    ```
    npm run build
    ```
    and post build run the application with `npm start`. Both applications accessible on `localhost:3030`

## Known Issues

If you get a permission error then run this command:
    ```
    chmod +x scripts/*
    ```