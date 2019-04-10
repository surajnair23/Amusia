
# Amusia

Final project for INFO 6150 - Web Design and User Experience Engineering course at Northeastern University's College of Engineering as a part of it's Masters in Science Information Systems coursework. The course aims at strengthening students knowledge of Web design and development by introducing them to web development frameworks such as Angular(This project was built using ReactJS which was not part of the syllabus).

You can find more about the course at http://msis.neu.edu/fall2018/16589.pdf

## Description

• The project was built using ReactJS and Bootstrap 4 for the front-end. The styling of certain pages was done using CCS Grid layout.

• We used the Axios library to connect to the back-end which was developed using NodeJs and ExpressJS. ExpressJS was used to provide REST API connection to a MongoDB database hosted on an AWS S3 bucket provided by mLab. 

• This allowed for users to upload music to their database and stream them on demand.

• The user data was encrypted at the application server level using BcryptJS which is a JavaScript library implementing an encryption algorithm of the same name. Additional security was provided was defining a custom SALT factor.

• All the configuration was managed using environment variables stored in .env files for easy reconfiguration.

• Multimedia data was stored using GridFS and Multer implementation of MongoDB which could allow for storing data in manageable chunks of 255kbs.

## Design and Considerations

• The core concept of our application was the ability to store music to a secure location and access them on demand without the need of a subscription service. 

• To implement this, we choose mLab which was a cloud hosted database management service by MongoDB(Database-as-a-Service). MongoDb was chosen for the ability to store unstructured media files with it’s standard implementation of GridFS.

• At the front-end we choose ReactJS for it’s quick and inexpensive DOM rendring capabilities using states.

## Running the app locally

The project will need to be set up individually to run the client application in React and the localhost server.

* ### To get the frontend running locally:

  * Clone this repo

  *	```npm install``` to install all required dependencies
  
  *	```npm start``` to start the local server (this project uses create-react-app)


Local web server will use standard React's port 3000. You can configure port in scripts section of package.json: we use cross-env to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.
Alternatively, you can add .env file in the root folder of project to set environment variables (use PORT to change webserver's port). This file will be ignored by git, so it is suitable for API keys and other sensitive stuff. 

Refer to dotenv and React documentation for more details. Also, please remove setting variable via script section of package.json – dotenv never override variables if they are already set.

* ### To get the back-end running:

  * Clone the repo

  * ```npm install``` to install all required dependancies

  * ```nodemon server.js``` to get the local server started

  * login register to mLab and enter the database url provided in you ```.env``` file

