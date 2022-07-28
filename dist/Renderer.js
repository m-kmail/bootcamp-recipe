class Renderer {
  constructor() {
    this.recipeSource = $("#recipesTemplate").html();
    this.recipeContainer = $("#recipesContainer");
  }
  recipesRenderer(recipes) {
    this.recipeContainer.empty();
    const recipestemplate = Handlebars.compile(this.recipeSource);
    this.recipeContainer.append(recipestemplate({ recipes }));
  }
}
