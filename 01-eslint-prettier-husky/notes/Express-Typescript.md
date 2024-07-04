# Express setup with Typescript

### Step 1 : Basic NodeJS Setup
* Install NodeJS
* create `index.js`
* Write some code in `index.js`
* Start the Application : `node index.js`

### Step 2 : nodemon Setup
* __nodemon__ is third-party package to start the server automatically.
* when you save the code server will restart automatically.
* Create Node Environment : `npm init -y`
*  Install nodemon : `npm install -D nodemon`
* Start the Application : `nodemon index.js`

### step 3 : Change the Scripts
* To avoid typing `nodemon index.js` every time, you can modify the scripts section of your `package.json` file.

```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```
* Start the Application : `npm run dev`

### Step 4 : ExpressJS Setup
* Install Server-side web Framework : `npm install express`
* Start the Application : `npm run dev`

### Step 5 : Check HTTP requests
* use __postman__
* We are using **REST Client** VScode extension for see the output.

### Step 6 : Setup Typescript
1. create two folders :
    * __src__ : development
    * __dist__ : production
2. Setup Typescript 
    - `npm install -D typescript @types/node @types/express`
    -  `tsc --init` create __tsconfig.json__ file
    - modify __tsconfig.json__ file -> __"ourDir":"./dist"__ for tell dist folder path
    - Run the Application on watch mode -> `tsc -w`
         * It automatically generates `JS` file of `TS` in dist folder when changes in TS files.
3. Link generated `JS` file in dist folder to `nodemon ./dist/index.js`


### Step 7 : Start the Application
* `tsc -w`
* `npm run start:dev`


### Installation 
* `npm install`


