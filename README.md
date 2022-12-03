# social-network-api

# Social Network API

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

The Social Network API application is a space for people to create thoughts and share them with the world. They have the ability to create, update and delete their thoughts. In addition to this other users can be their friend and create reactions on other users thoughts. Reactions and friends can be deleted, as well as users.

I created this application as I believe the world really needs another platform that people can share their thoughts on so that others can share in them and react to them. 

This application allowed me to practise using MongoDB for the first time, as an alternative to SQL, and Sequelise. I was further able to practice routes, models and controller files, but all meeting Mongo requirements. I found it a bit more intuitive and easier to use. 

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Credits](#credits)

---

## Installation

The user will need to clone the application from my GitHub account: https://github.com/RosemaryJF/social-network-api, to their local repository, and install Node.js, mySQL and npm on their code editor, if it isn't already. It will also be helpful to have MongoDb and Compass installed on your local machine. In addition to this, to view the applications functionality you will need to have a program like Insomnia, or Postman.

Once cloned to the local repository the user will need to run `npm i` or `npm install` so that the necessary packages are installed on the application for it to function properly.

From there the user will be able to launch the application from their intergrated terminal with either `node server.js` or `npm start`.

---

## Usage

For a full tutorial please view my run through video of the application and its functionalities via the link below:

[Walk Through Video](https://drive.google.com/file/d/1BexiS3zPNOaaYEcsXS8WeLsaa_BNZKUV/view)

Once the application is installed and being hosted on the users local server they should navigate to their API testing program (such as; Insomnia or Postman).

*Please note:* The database is not seeded to start with, the user will need to create users and thoughts from scratch.

Firstly, to view all users and thoughts the user should do a `GET` request to the following:

- `localhost:3001/api/users/`

- `localhost:3001/api/thoughts/`

If they want to view individuals of any of the above they simply need to input the applicable `:userId` or `:thoughtId` at the end of the URL. 

To create either a user or thought they should switch to `POST` with the applicable URL and enter in JSON format what is required in the body to create them. I would recommend that the user either take note of the schema when creating these. 

To update the user should switch to `PUT` enter the applicable URL and `:id` user/thought that is being updated. Then in JSON format they can enter the required aspects of the body to be updated. A message will be displayed letting them know "X has been updated"

If the user wishes to `DELETE` either a user or thought they should once again enter the applicable URL and `:id` to be deleted. Once the user/thought has been successfully deleted a message will display saying "X has been deleted". It is worth noting that should a user be deleted who has thoughts their associated thoughts will be deleted too.

In addition to all the above a user can have friends, and thoughts can have reactions. The routes look like below:

- `localhost:3001/api/users/:userID/friends/:friendId`

- `localhost:3001/api/thoughts/:thoughtId/reactions/`

Friends do not need any JSON input, while reactions do. Friends and Reactions only have the ability to be created and deleted, they cannot be updated, or viewed individually.
The user can, however, view the user/thought that the friend/reaction is associated with and it will generate due to being attached to them.

If you have any questions or suggestions at all about the application don't hesitate to reach out to me on GitHub.

---

## Features

The date timestamp in a reaction is formatted to read easier. It is also meant to be a feature in thoughts but for some reason it's not functioning. An aspect to be debugged in future development.

Each user has a friend count which reflects how many friends they have.

Each thought has a reaction count which shows how many reactions it has.

---

## License

This application is licensed under an [MIT license](https://github.com/RosemaryJF/social-network-api/blob/main/LICENSE).

---

## Credits

- https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

- https://sydney.bootcampcontent.com/university-of-sydney/USYD-VIRT-FSF-PT-07-2022-U-LOLC/-/tree/main/18-NoSQL/01-Activities/28-Stu_Mini-Project/Main

- https://sydney.bootcampcontent.com/university-of-sydney/USYD-VIRT-FSF-PT-07-2022-U-LOLC/-/tree/main/18-NoSQL/01-Activities/25-Ins_CRUD-Subdoc

- https://momentjs.com/docs/#/displaying/format/
