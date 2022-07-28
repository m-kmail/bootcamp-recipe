const express = require("express");
const router = express.Router();
const urllib = require("urllib");

router.get("/sanity", (req, res) => res.send("OK"));

router.get("/recipes/:ingradient", function (req, res) {
  const ingradient = req.params.ingradient;
  const url = `https://recipes-goodness.herokuapp.com/recipes/${ingradient}`;

  urllib.request(url, function (err, data) {
    const recipes = filterTheRecipes(JSON.parse(data).results);
    res.send(recipes);
  });
});

const filterTheRecipes = function (recipes) {
  recipes = recipes.map((recipe) => {
    return {
      ingradients: recipe.ingredients,
      title: recipe.title,
      href: recipe.href,
      thumpnail: recipe.thumbnail,
    };
  });
  return recipes;
};

module.exports = router;
