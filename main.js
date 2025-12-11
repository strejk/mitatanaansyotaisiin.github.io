/* -------------------------------------------
   YLEISET ASETUKSET
-------------------------------------------- */

const days = [
  "Maanantai", "Tiistai", "Keskiviikko",
  "Torstai", "Perjantai", "Lauantai", "Sunnuntai"
];

let currentDay = null;


/* -------------------------------------------
   MURTOLUKUJEN MUUNNOS UNICODE-MUOTOON
-------------------------------------------- */

function toUnicodeFraction(value) {
  if (!value) return value;

  let v = value.toString().trim().replace(",", ".");
  const unicodeMap = {
    "1/2": "½", "0.5": "½",
    "1/3": "⅓", "0.333": "⅓",
    "2/3": "⅔", "0.666": "⅔",
    "1/4": "¼", "0.25": "¼",
    "3/4": "¾", "0.75": "¾"
  };

  if (unicodeMap[v]) return unicodeMap[v];

  const fracMatch = v.match(/^(\d+)\/(\d+)$/);
  if (fracMatch) {
    const num = parseFloat(fracMatch[1]);
    const den = parseFloat(fracMatch[2]);
    const decimal = (num / den).toFixed(3);
    return unicodeMap[decimal] || v;
  }

  return v;
}


/* -------------------------------------------
   AINESMÄÄRÄN MUOTOILU
-------------------------------------------- */

function formatIngredient(item, amount) {
  if (!amount) return item;

  const match = amount.match(/^(\S+)\s*(.*)$/);
  if (!match) return amount + " " + item;

  let qty = toUnicodeFraction(match[1]);
  let unit = match[2];

  return `${qty} ${unit} ${item}`.trim();
}


/* -------------------------------------------
   RUOKALISTAN LUONTI
-------------------------------------------- */

document.querySelectorAll('.main-ingredients input').forEach(cb => {
    cb.addEventListener("change", () => {
        const label = cb.closest("label");
        if (cb.checked) {
            label.classList.add("selected");
        } else {
            label.classList.remove("selected");
        }
    });
});


function generateMealPlan() {
  const checkboxes = document.querySelectorAll('.main-ingredients input[type="checkbox"]:checked');
  const mainIngredients = Array.from(checkboxes).map(cb => cb.value);

const vegeDays = parseInt(document.getElementById("vegeDaysSlider").value, 10);


  const chosenRecipes = [];
  const dailyRecipes = {};
  let previousIngredient = null;

  const vegeDayIndexes = [];
  while (vegeDayIndexes.length < vegeDays) {
    const r = Math.floor(Math.random() * days.length);
    if (!vegeDayIndexes.includes(r)) vegeDayIndexes.push(r);
  }

  days.forEach((day, index) => {
    let recipeOptions = [];

    if (vegeDayIndexes.includes(index)) {
      recipeOptions = [...recipes.vege, ...recipes.tofu];
    } else if (mainIngredients.length === 0) {
      recipeOptions = [{
        name: "Et valinnut pääraaka-ainetta",
        ingredients: [],
        instructions: "",
        img: "250.PNG"
      }];
    } else {
      let ingredient;
      do {
        ingredient = mainIngredients[Math.floor(Math.random() * mainIngredients.length)];
      } while (ingredient === previousIngredient && mainIngredients.length > 1);

      previousIngredient = ingredient;

      recipeOptions = ingredient.toLowerCase() === "tofu"
        ? recipes.tofu
        : (recipes[ingredient] || []);
    }

    let recipe;
    let copy = [...recipeOptions];

    do {
      recipe = copy[Math.floor(Math.random() * copy.length)];
      copy.splice(copy.indexOf(recipe), 1);
    } while (chosenRecipes.some(r => r.name === recipe.name) && copy.length > 0);

    recipe.prevIngredient = previousIngredient;
    chosenRecipes.push(recipe);
    dailyRecipes[day] = recipe;
  });

  window.dailyRecipes = dailyRecipes;

  renderOverview(dailyRecipes);
  renderMealCard(days[0], dailyRecipes[days[0]]);
  renderShopping(dailyRecipes);

  showSection("overviewSection");
  showSection("mealSection");
  showSection("shoppingSection");
}


/* -------------------------------------------
   NÄYTÄ KORTTI
-------------------------------------------- */

function showSection(id) {
  const section = document.getElementById(id);
  section.style.display = "block";
  setTimeout(() => section.classList.add("show"), 10);
}


/* -------------------------------------------
   YLEISKATSAUS
-------------------------------------------- */

function renderOverview(dailyRecipes) {
  const container = document.getElementById("overviewCard");
  container.innerHTML = "";

  const table = document.createElement("table");
  const header = document.createElement("tr");
  header.innerHTML = "<th>Päivä</th><th>Resepti</th><th></th>";
  table.appendChild(header);

  days.forEach((day, index) => {
    const tr = document.createElement("tr");

    const tdDay = document.createElement("td");
    tdDay.textContent = day;
    tdDay.onclick = () => renderMealCard(day, dailyRecipes[day]);

    const tdRecipe = document.createElement("td");
tdRecipe.textContent = dailyRecipes[day].name;

tdRecipe.onclick = () => renderMealCard(day, dailyRecipes[day]);


    const tdAction = document.createElement("td");
    tdAction.style.textAlign = "right";

    const icon = document.createElement("span");
    icon.className = "regen-icon";
    icon.textContent = "↻";
    icon.onclick = () => regenerateDay(day, index, tdRecipe, dailyRecipes);

    tdAction.appendChild(icon);

    tr.appendChild(tdDay);
    tr.appendChild(tdRecipe);
    tr.appendChild(tdAction);

    table.appendChild(tr);
  });

  container.appendChild(table);
}

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("vegeDaysSlider");
  const value = document.getElementById("vegeDaysValue");

  if (!slider) return;

  value.textContent = slider.value;

  slider.addEventListener("input", () => {
    value.textContent = slider.value;
  });
});


/* -------------------------------------------
   RESEPTIKORTTI
-------------------------------------------- */

function highlightCurrentDay(day) {
  currentDay = day;
  const rows = document.querySelectorAll("#overviewCard table tr");

  rows.forEach(row => {
    const firstCell = row.querySelector("td:first-child");
    if (!firstCell) return;

    if (firstCell.textContent === day) {
      row.classList.add("active");
    } else {
      row.classList.remove("active");
    }
  });
}

function renderMealCard(day, recipe) {
  highlightCurrentDay(day);

  const div = document.getElementById("mealPlan");
  div.innerHTML = "";

  // UUSI: tyyppikuvat oikeina valokuvina
  const typeImageMap = {
    nauta: "img/nauta.jpg",
    sika: "img/sika.jpg",
    kana: "img/kana.jpg",
    kala: "img/kala.jpg",
    tofu: "img/tofu.jpg",
    vege: "img/vege.jpg"
  };

  // Päättele reseptin tyyppi recipes-objektista
  let recipeType = null;
  for (const [type, list] of Object.entries(recipes)) {
      if (list.includes(recipe)) {
          recipeType = type;
          break;
      }
  }

  // Lopullinen kuva reseptille
  const img = typeImageMap[recipeType] || "img/default.jpg";

  const card = document.createElement("div");
  card.className = "recipe-card";

  card.innerHTML = `
    <h3 class="recipe-title">${recipe.name}</h3>

    <div class="recipe-content">
      <div class="recipe-image">
        <img src="${img}">
      </div>

      <div class="recipe-ingredients">
        <h4>Ainekset</h4>
        <ul>
          ${recipe.ingredients
            .map(i => `<li>${formatIngredient(i.item, i.amount)}</li>`)
            .join("")}
        </ul>
      </div>
    </div>

    <div class="recipe-instructions">
      <h4>Ohje</h4>
      <p>${recipe.instructions}</p>
    </div>
  `;

  div.appendChild(card);
}




/* -------------------------------------------
   PÄIVÄN UUDELLEENGENEROINTI
-------------------------------------------- */

function regenerateDay(day, index, tdRecipe, dailyRecipes) {
  const mainIngredients = Array.from(
    document.querySelectorAll('.main-ingredients input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  let recipeOptions = [];

  if (mainIngredients.length === 0) {
    recipeOptions = [{
      name: "Et valinnut pääraaka-ainetta",
      ingredients: [],
      instructions: "",
      img: "250.PNG"
    }];
  } else {
    let ingredient;
    do {
      ingredient = mainIngredients[Math.floor(Math.random() * mainIngredients.length)];
    } while (ingredient === dailyRecipes[day].prevIngredient && mainIngredients.length > 1);

    dailyRecipes[day].prevIngredient = ingredient;
    recipeOptions = recipes[ingredient] || [];
  }

  let copy = [...recipeOptions];
  let recipe;

  do {
    recipe = copy[Math.floor(Math.random() * copy.length)];
    copy.splice(copy.indexOf(recipe), 1);
  } while (recipe.name === dailyRecipes[day].name && copy.length > 0);

  dailyRecipes[day] = recipe;
  tdRecipe.textContent = recipe.name;

  renderMealCard(day, recipe);
  renderShopping(dailyRecipes);
}


/* -------------------------------------------
   DROPDOWN-NAPIN TEKSTIN PÄIVITYS
-------------------------------------------- */

function updateDayDropdownLabel(toggle, menu) {
  const shortNames = {
    "Maanantai": "Ma", "Tiistai": "Ti", "Keskiviikko": "Ke",
    "Torstai": "To", "Perjantai": "Pe", "Lauantai": "La", "Sunnuntai": "Su"
  };

  const checked = Array.from(
    menu.querySelectorAll('input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  if (checked.length === 0 || checked.length === days.length) {
    toggle.textContent = "Valitse päivät";
  } else if (checked.length === 1) {
    toggle.textContent = `Päivä: ${shortNames[checked[0]]}`;
  } else {
    toggle.textContent = "Valitut: " +
      checked.map(d => shortNames[d]).join(", ");
  }
}


/* -------------------------------------------
   OSTOSLISTA
-------------------------------------------- */

function renderShopping(dailyRecipes) {
  const shoppingDiv = document.getElementById("shoppingList");
  shoppingDiv.innerHTML = "";

  const dropdown = document.createElement("div");
  dropdown.className = "day-dropdown";

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "day-dropdown-toggle";

  const menu = document.createElement("div");
  menu.className = "day-dropdown-menu";

  days.forEach(d => {
    const label = document.createElement("label");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = d;
    cb.checked = true;

    cb.addEventListener("change", () => updateDayDropdownLabel(toggle, menu));

    label.appendChild(cb);
    label.appendChild(document.createTextNode(" " + d));
    menu.appendChild(label);
  });

  updateDayDropdownLabel(toggle, menu);

  toggle.addEventListener("click", e => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  menu.addEventListener("click", e => e.stopPropagation());

  dropdown.appendChild(toggle);
  dropdown.appendChild(menu);

  const controlsRow = document.createElement("div");
  controlsRow.className = "shopping-controls";

  controlsRow.appendChild(dropdown);

  const generateBtn = document.createElement("button");
  generateBtn.textContent = "Valmis";
  generateBtn.onclick = () => {
    const selected = Array.from(
      menu.querySelectorAll("input[type=checkbox]:checked")
    ).map(cb => cb.value);

    const usedDays = selected.length ? selected : days;

    const recipesSelected = usedDays.map(day => dailyRecipes[day]);
    const shoppingList = generateShoppingList(recipesSelected);
    renderShoppingTable(shoppingList);
  };

  controlsRow.appendChild(generateBtn);

  shoppingDiv.appendChild(controlsRow);

  const recipesAll = days.map(day => dailyRecipes[day]);
  renderShoppingTable(generateShoppingList(recipesAll));
}


/* -------------------------------------------
   AINESMÄÄRIEN YHDISTÄMINEN
-------------------------------------------- */

function generateShoppingList(mealPlan) {
  const shoppingList = {};

  const unitMap = {
    g: { type: "weight", factor: 1 },
    kg: { type: "weight", factor: 1000 },
    ml: { type: "volume", factor: 1 },
    l: { type: "volume", factor: 1000 },
    dl: { type: "volume", factor: 100 },
    tl: { type: "volume", factor: 5 },
    rkl: { type: "volume", factor: 15 },
    kpl: { type: "count", factor: 1 }
  };

  mealPlan.forEach(recipe => {
    recipe.ingredients.forEach(ing => {
      if (!ing.amount) return;

      const match = ing.amount.match(/^(\d+(?:[.,]\d+)?)\s*(\S+)$/);
      if (match) {
        let qty = parseFloat(match[1].replace(",", "."));
        let unit = match[2].toLowerCase();

        if (!unitMap[unit]) {
          if (!shoppingList[ing.item]) shoppingList[ing.item] = { qty: null, extra: [] };
          shoppingList[ing.item].extra.push(ing.amount);
          return;
        }

        qty *= unitMap[unit].factor;

        if (!shoppingList[ing.item]) {
          shoppingList[ing.item] = { qty: 0, unitType: unitMap[unit].type, extra: [] };
        }

        const entry = shoppingList[ing.item];

        if (entry.unitType === unitMap[unit].type) {
          entry.qty += qty;
        } else {
          entry.extra.push(ing.amount);
        }

      } else {
        if (!shoppingList[ing.item]) {
          shoppingList[ing.item] = { qty: null, extra: [] };
        }
        shoppingList[ing.item].extra.push(ing.amount);
      }
    });
  });

  const finalList = {};

  Object.keys(shoppingList)
    .sort((a, b) => a.localeCompare(b, "fi"))
    .forEach(item => {
      const entry = shoppingList[item];

      let main = "";
      if (entry.qty !== null) {
        let qty = entry.qty;
        let unit;

        switch (entry.unitType) {
          case "weight":
            unit = qty >= 1000 ? "kg" : "g";
            if (unit === "kg") qty /= 1000;
            break;
          case "volume":
            unit = qty >= 1000 ? "l" : "ml";
            if (unit === "l") qty /= 1000;
            break;
          case "count":
            unit = "kpl";
            break;
        }

        main = `${parseFloat(qty.toFixed(2))} ${unit}`;
      }

      if (entry.extra.length > 0) {
        main += (main ? " + " : "") + entry.extra.join(" + ");
      }

      finalList[item] = { main };
    });

  return finalList;
}


/* -------------------------------------------
   OSTOSLISTATAULU
-------------------------------------------- */

function renderShoppingTable(shoppingList) {
  const shoppingDiv = document.getElementById("shoppingList");

  const controls = shoppingDiv.querySelector(".shopping-controls");

  shoppingDiv.innerHTML = "";
  if (controls) shoppingDiv.appendChild(controls);

  const categories = {};
  Object.keys(ingredientCategories).forEach(c => { categories[c] = []; });

  Object.entries(shoppingList).forEach(([name, data]) => {
    let placed = false;
    for (const [cat, items] of Object.entries(ingredientCategories)) {
      if (items.includes(name)) {
        categories[cat].push({ name, data });
        placed = true;
        break;
      }
    }
    if (!placed) {
      if (!categories["Muut"]) categories["Muut"] = [];
      categories["Muut"].push({ name, data });
    }
  });

  Object.entries(categories).forEach(([cat, items]) => {
    if (items.length === 0) return;

    const h3 = document.createElement("h3");
    h3.textContent = cat;
    shoppingDiv.appendChild(h3);

    const table = document.createElement("table");
    table.innerHTML = "";

    items.sort((a, b) => a.name.localeCompare(b.name, "fi"))
      .forEach(entry => {
        table.innerHTML += `<tr><td>${entry.name}</td><td>${entry.data.main}</td></tr>`;
      });

    shoppingDiv.appendChild(table);
  });
}


/* -------------------------------------------
   SULJE DROPDOWN KLIKKAAMALLA ULOSPUOLELLE
-------------------------------------------- */

document.addEventListener("click", (e) => {
  const openDropdowns = document.querySelectorAll(".day-dropdown.open");
  openDropdowns.forEach(dd => {
    if (!dd.contains(e.target)) {
      dd.classList.remove("open");
    }
  });
});


/* -------------------------------------------
   SHOPPING ACCORDION CHEVRON
-------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.getElementById("shoppingAccordion");
  if (!accordion) return;

  const chevron = accordion.querySelector(".chevron");
  if (!chevron) return;

  const updateChevron = () => {
    chevron.src = accordion.open
      ? "chevron-up.svg"
      : "chevron-down.svg";
  };

  accordion.addEventListener("toggle", updateChevron);
  updateChevron();
});


/* -------------------------------------------
   TULOSTUS: GENEROI KAIKKI RESEPTIKORTIT
-------------------------------------------- */

function buildPrintRecipes() {
  if (!window.dailyRecipes) return;

  const container = document.getElementById("printAllRecipes");
  container.innerHTML = "";

  Object.entries(window.dailyRecipes).forEach(([day, recipe]) => {
    const div = document.createElement("div");
    div.className = "print-recipe";

    div.innerHTML = `
      <h2>${day}</h2>
      <h3>${recipe.name}</h3>

      <h4>Ainekset</h4>
      <ul>
        ${recipe.ingredients
          .map(i => `<li>${formatIngredient(i.item, i.amount)}</li>`)
          .join("")}
      </ul>

      <h4>Ohje</h4>
      <p>${recipe.instructions}</p>
      <hr>
    `;

    container.appendChild(div);
  });
}

function buildPrintShoppingList() {
    if (!window.dailyRecipes) return;

    const container = document.getElementById("printShopping");
    container.innerHTML = "<h2>Ostoslista</h2>";

    // Käytetään samoja funktioita kuin sivun ostoslistassa
    const allRecipes = days.map(day => window.dailyRecipes[day]);
    const shoppingList = generateShoppingList(allRecipes);

    let output = "<ul>";

    Object.entries(shoppingList).forEach(([name, data]) => {
        output += `<li>${name}: ${data.main}</li>`;
    });

    output += "</ul>";

    container.innerHTML += output;
}


window.addEventListener("beforeprint", () => {
    buildPrintRecipes();
    buildPrintShoppingList();
});
