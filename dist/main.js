const renderer = new Renderer();

$(".btn").on("click", function () {
  const ingradient = $("#input_ingradient").val();

  $.get(`/recipes/${ingradient}`, function (recipes) {
    renderer.recipesRenderer(recipes);
  });
});

$("body").on("click", ".recipeImage", function () {
  alert($(this).closest(".recipe").find("li").first().text());
});
