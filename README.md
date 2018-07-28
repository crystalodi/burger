# Eat The Burger

Eat The Burger is an app that allows you to add different types of burgers and then "devour" them later.

## Live version
Go [here](https://lit-hamlet-29799.herokuapp.com/) to view the app.

## About the Application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Install the following programs if they aren't on your local machine.

Node (LTS) - http://nodejs.org

MySQL Workbench - https://dev.mysql.com/downloads/workbench/


### Installing

Clone [this](https://github.com/crystalodi/burger.git) github repository to a folder on your computer using a command line program.

```
git clone https://github.com/crystalodi/burger.git
```

Navigate to the folder the repository was cloned into and run npm install to create the `node_modules` folder needed to run the application

```
cd burger
npm install
```

Open MySQL Workbench program installed in the Prerequisites section. Open schema.sql in `db` folder and execute the query. Do the same for `seeds.sql` located in the folder.


Start the server and application

```
npm start
```

Open a web browser and type http://localhost:3000. Your should see this:

<img src="https://raw.githubusercontent.com/crystalodi/burger/master/images/home.png" width="50%" height="100%">

### Folder Structure

The app utilizes the MVC (Model-View-Controller) design pattern to organize functionality. After following the steps in the Installation section, your folder should look like this:

```
├───config
├───controllers
├───db
├───images
├───models
├───node_modules
├───public
│   └───assets
│       ├───css
│       ├───img
│       └───js
└───views
    ├───layouts
    └───partials
        └───burgers
```
* `/config` contains the logic that connects to the MySQL database and the ORM used to create, read, and update burgers submitted by user. 
* `/db` contains sql scripts to create schema and populate tables with test data
* `/models` contains Burger model that passes data to the orm in `/config` (Model)
* `/controllers` contains api routes for retrieving, adding, and updating burgers (Controller)
* `/public` contains front end ui used to display the page. (View)
* `/views` contains express handlebars templates used to render eaten and uneaten burgers. (View)

## How to Use

### Add a burger
Enter the type of burger into the burger message area and press the Add Burger Button. The burger should now appear under the Uneaten Burgers section underneath the add burger section.

### Eat a Burger
Under the uneaten burgers section below the add burger form, click on the eat it link

<img src="https://raw.githubusercontent.com/crystalodi/burger/master/images/eat_it.png" width="50%" height="100%">

After the burger is eaten, then the burger will appear under the eaten burgers section

<img src="https://raw.githubusercontent.com/crystalodi/burger/master/images/eaten_burger.png" width="50%" height="100%">

## Built With

* [NodeJS](https://nodejs.org/) - The web framework used
* [Express](https://expressjs.com/) - Used to create web server
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars/) - Used to generate layout
* [Materialize CSS](https://materializecss.com/) - CSS Framework used to add styling to layout.
* [Body Parser](https://www.npmjs.com/package/body-parser) - Middleware for parsing body sent for POST requests.
* [MySQL](https://www.npmjs.com/package/mysql) - Node Package used to query MySQL database

## Authors

* **Crystal Odi** - *Initial work* - [crystalodi](https://github.com/crystalodi)


## Acknowledgments

* MySQL Documentation

