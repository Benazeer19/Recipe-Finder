
  // Show the modal with ingredients and steps
  function showRecipe(title, ingredients, steps) {
    document.getElementById("modalTitle").innerText = title;

    const ingList = document.getElementById("modalIngredients");
    ingList.innerHTML = "";
    ingredients.forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      ingList.appendChild(li);
    });

    const stepList = document.getElementById("modalSteps");
    stepList.innerHTML = "";
    steps.forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      stepList.appendChild(li);
    });

    document.getElementById("recipeModal").style.display = "flex";
  }

  // Close the modal
  function closeModal() {
    document.getElementById("recipeModal").style.display = "none";
  }

  // Search recipes by name or data-name
  function searchRecipes() {
    const input = document.getElementById("ingredientInput").value.toLowerCase();
    const cards = document.querySelectorAll(".recipe-card");
    let matchFound = false;

    cards.forEach(card => {
      const dataName = card.getAttribute("data-name")?.toLowerCase() || "";
      const cardTitle = card.querySelector("h3")?.innerText.toLowerCase() || "";

      if (dataName.includes(input) || cardTitle.includes(input)) {
        card.style.display = "block";
        matchFound = true;
      } else {
        card.style.display = "none";
      }
    });

    // Show "No results" message if nothing matches
    const messageBox = document.getElementById("noResultsMessage");
    messageBox.style.display = matchFound ? "none" : "block";
  }
