const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

Recipe.create({
  title: "chicken",
  level: "Easy Peasy",
  ingredients: ["chicken"],
  cuisine: "meat",
  dishType: "other",
  image:
    "https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_2240,c_limit/RoastChicken_RECIPE_080420_37993.jpg",
  duration: 10,
  creator: "me",
  created: Date.now(),
})
  .then((savedRecipe) => {
    console.log("recipe title:", savedRecipe.title);
    return Recipe.find();
  })
  .catch((err) => console.log(err));
