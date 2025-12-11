function printAllIngredients(recipes) {
  // Käytetään Set-rakennetta duplikaattien poistamiseen
  const ingredientSet = new Set();

  // Käydään läpi kaikki reseptit ja kerätään ainesosat
  Object.values(recipes).forEach(category => {
    category.forEach(recipe => {
      recipe.ingredients.forEach(ing => {
        ingredientSet.add(ing.item);
      });
    });
  });

  // Järjestetään ainesosat aakkosjärjestykseen
  const sortedItems = [...ingredientSet].sort((a, b) => a.localeCompare(b, 'fi'));

  // Luodaan lista ja lisätään se sivulle
  const container = document.getElementById("ingredientList");
  const list = document.createElement("ul");

  sortedItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  container.appendChild(list);
}

// Kun DOM on valmis, ajetaan funktio
window.addEventListener("DOMContentLoaded", () => {
  printAllIngredients(recipes);
});
