function printAllIngredients(recipes) {
  const shoppingList = {};

  const unitMap = {
    g: { type: "weight", factor: 1 },
    kg: { type: "weight", factor: 1000 },
    ml: { type: "volume", factor: 1 },
    l: { type: "volume", factor: 1000 },
    dl: { type: "volume", factor: 100 },
    tl: { type: "volume", factor: 5 },
    rkl: { type: "volume", factor: 15 },
    kpl: { type: "count", factor: 1 },
    tlk: { type: "count", factor: 1 }
  };

  Object.values(recipes).forEach(category => {
    category.forEach(recipe => {
      recipe.ingredients.forEach(ing => {
        if (!ing.amount || ing.amount.trim() === "") return;

        const match = ing.amount.match(/^(\d+(?:[.,]\d+)?)\s*(\S+)$/);
        if (match) {
          let qty = parseFloat(match[1].replace(",", "."));
          let unit = match[2].toLowerCase();

          if (unitMap[unit]) {
            const baseUnit = Object.keys(unitMap).find(
              u => unitMap[u].type === unitMap[unit].type && unitMap[u].factor === 1
            );
            qty *= unitMap[unit].factor;
            unit = baseUnit;
          }

          if (!shoppingList[ing.item]) {
            shoppingList[ing.item] = { qty: 0, unit: unit, extra: [], recipes: [] };
          }

          if (shoppingList[ing.item].unit === unit) {
            shoppingList[ing.item].qty += qty;
          } else {
            shoppingList[ing.item].extra.push(`${ing.amount} (${recipe.name})`);
          }
          shoppingList[ing.item].recipes.push(recipe.name);
        } else {
          // esim. "ripaus" tai "maun mukaan"
          if (!shoppingList[ing.item]) {
            shoppingList[ing.item] = { qty: null, unit: null, extra: [], recipes: [] };
          }
          shoppingList[ing.item].extra.push(`${ing.amount} (${recipe.name})`);
          shoppingList[ing.item].recipes.push(recipe.name);
        }
      });
    });
  });

  const sortedItems = Object.keys(shoppingList).sort((a, b) => a.localeCompare(b, 'fi'));

  const container = document.getElementById("ingredientList");
  const table = document.createElement("table");
  table.innerHTML = "<tr><th>Ainesosa</th><th>Määrä</th><th>Käytetty resepteissä</th></tr>";

  sortedItems.forEach(item => {
    const entry = shoppingList[item];
    let line = "";
    if (entry.qty !== null) {
      let qty = entry.qty;
      let unit = entry.unit;

      if (unit === "g" && qty >= 1000) {
        qty = qty / 1000;
        unit = "kg";
      } else if (unit === "ml" && qty >= 1000) {
        qty = qty / 1000;
        unit = "l";
      }

      line = `${parseFloat(qty.toFixed(2))} ${unit}`;
    }
    if (entry.extra.length > 0) {
      line += (line ? " + " : "") + entry.extra.join(" + ");
    }

    const recipeList = [...new Set(entry.recipes)].join(", ");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item}</td><td>${line}</td><td>${recipeList}</td>`;
    table.appendChild(row);
  });

  container.appendChild(table);
}

window.addEventListener("DOMContentLoaded", () => {
  printAllIngredients(recipes);
});
