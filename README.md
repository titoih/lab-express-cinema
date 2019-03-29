![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Express Cinema

## Introduction

![image](https://user-images.githubusercontent.com/23629340/36983687-49a3d64e-2093-11e8-8b86-b11813f0cdba.png)

We will create a cinema web page, where we will display the showtimes for some movies!

## Requirements

- Fork this repo
- Clone this repo


## Submission

Upon completion, run the following commands:
```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.



## Instructions

### Iteration 0 | Setup env

- Start Mongodb process typing in your terminal:
```
mongod
```

- Install required dependencies:
```
cd path/to/lab-express-cinema
npm i
npm i --save mongoose
```

Now you are ready to start 🚀

### Iteration 1 | Configure MongoDB connection

We need connect books application with MongoDB in order to list stored books. 
Remember, specific application configs must be placed at the `/config` directory, so
edit the `configs/db.config.js` file and complete mongodb connection.

💡Promises
```
action()
  .then(() => console.info('it works!'))
  .catch(error => console.info('An error ocurred', error))
```

### Iteration 2 | Movie model

Application model must be placed at the `/models` directory. Create the **movie model** so the `user.model.js` have the following fields:

- **title**, type String. Its required.
- **director**, type String. Its required.
- **stars**, type [String]. By default is empty.
- **image**, type [String]. Must be a valid URL.
- **description**, type String. Its required and needs at lest 10 chars.
- **showtimes**, type [String].

> Remember, we need validate fields properly!

First, we need to seed our database. Below you will find an array of objects with info for 8 movies. You should create two files:
- `models/Movie.js` for the Movie model
- `bin/seeds.js` file inside the `bin` folder and write the code necessary to seed the database.


### Iteration 3 | Seed db

Create `/bin/seeds.js` and insert at database all movies from `/data/movies.json`. Then, add a new `seeds` script to package.json to run the `seeds.js` script:

```
npm run seeds
```

### Iteration 4 | List the Movies

On the `/movies` route, we need to list all the movies we have in our database. You should create a `/movies/list.hbs` file, and display a list of all the movies.

![image](https://user-images.githubusercontent.com/23629340/36986832-240fe492-209b-11e8-94de-a7334af41076.png)


- Create `/routes/movies.routes.js`
- Create `/controllers/movies.controller.js`
- Link `/movies` path with the movies Router 
- Link `GET /movies` route with the `list` movies controller action
- `list` controller action must find all movies from database rendering the `movies/list` hbs template

### Iteration 4 | Display Movie Info

Finally, you have to create a view to display all the info about each movie. You need a `/movie/:id` route, where the user can check all the info about each movie, after clicking on the `See More` button of the `/movies` view.

![image](https://user-images.githubusercontent.com/23629340/36986933-6f8060b4-209b-11e8-8571-496914f9ae96.png)


Happy Coding! :heart:
