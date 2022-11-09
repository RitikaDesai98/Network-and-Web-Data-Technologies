console.log("Hello 🌎");

//This function toggles between the light and dark theme when the button is clicked
function toggleTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//This function adds a task to the unordered list element on the task.html page
function addTask() {
  //We first create a li element to which we later append the task
  var li = document.createElement("li");
  //Assign it the same class name
  li.className = "task";

  //Get and store the value of the task i.e., the task name entered by the user
  var inputValue = document.getElementById("new-task").value;
  //If the value is null, display an alert to tell the user to enter something
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    //Since the task has a checkbox to show if the task is complete or incomplete
    // we first add a checkbox
    var checkbox = document.createElement("input");
    //We assign the checkbox attribute names
    checkbox.type = "checkbox";
    checkbox.name = "task";
    checkbox.id = "item";

    //Now we create a label element for the checkbox
    var label = document.createElement("label");
    label.for = "item";

    //Finally we create a span element to take on the value of the task inputted by the user
    var span = document.createElement("span");
    span.className = "label-text";
    span.textContent = inputValue;

    //Once we have created all the elements and assigned them their respective values
    //we have to append it to the li element we made earlier
    li.appendChild(checkbox);
    //We first append the span to the label and then append the label to the li
    label.appendChild(span);
    li.appendChild(label);

    //At last we append the li element to the tasks element
    document.getElementById("tasks").appendChild(li);
  }
  //This clears the value of the input box so that the input box doesn't contain any old value
  //making it easier for the user to enter a new value
  document.getElementById("new-task").value = "";
}

//This function adds an expense on the budget.html page
document.getElementById("addExpense")?.addEventListener("click", () => {
  //We get the budget table
  var tbl = document.getElementById("budget");

  //Get and store the value of the expense name and the amount spent by the user
  var expenseValue = document.getElementById("expense").value;
  var amountValue = document.getElementById("amount").value;

  //If the value is null, display an alert to tell the user to enter something
  if (expenseValue === "" || amountValue === "") {
    alert("You must write something!");
  } else {
    //We create a new row in the budget table to add the expense and amount
    var newRow = tbl.insertRow();
    //Add the expense to the first cell of the new row
    newRow.insertCell(0).innerHTML = expenseValue;
    //and the amount to the second cell of the new row
    newRow.insertCell(1).innerHTML = amountValue;
  }
  //This clears the value of the input boxes so that the input boxes don't contain any old value
  //making it easier for the user to enter a new value
  document.getElementById("expense").value = "";
  document.getElementById("amount").value = "";
});

//Another function in the budget.html to total the amounts
document.getElementById("getTotal")?.addEventListener("click", () => {
  //Get the budget table
  var tbl = document.getElementById("budget"),
    sumVal = 0;
  //Iterate through the column containing the amount
  for (var i = 1; i < tbl.rows.length; i++) {
    sumVal = sumVal + parseFloat(tbl.rows[i].cells[1].innerHTML);
  }
  //Set the val element to display the total amount
  document.getElementById("val").innerHTML = "Total = " + sumVal;
});

//This function adds a recipe to the recipe.html page
function addRecipe() {
  //Create a new grid-item element
  var grid_item = document.createElement("div");
  //Assign it the same class name
  grid_item.className = "grid-item";

  //Get and store the value of the ingredients and recipe entered by the user
  var ingredients = document.getElementById("ingredients").value;
  var recipe = document.getElementById("recipe").value;

  //If the value is null, display an alert to tell the user to enter something
  if (ingredients === "" || recipe === "") {
    alert("You must write something!");
  } else {
    //We create a series of elements starting with a header to show ingredients
    var ingredientHeader = document.createElement("h3");
    ingredientHeader.textContent = "Ingredients";

    //Create the paragraph containing the ingredigents entered by the user
    var ingredientContent = document.createElement("p");
    ingredientContent.innerText = ingredients;

    //Header to show Recipe
    var recipeHeader = document.createElement("h3");
    recipeHeader.textContent = "Recipe";

    //Create the paragraph containing the recipe entered by the user
    var recipeContent = document.createElement("p");
    recipeContent.innerText = recipe;

    //Now we append all the elements to the grid-item
    grid_item.append(ingredientHeader);
    grid_item.append(ingredientContent);
    grid_item.append(recipeHeader);
    grid_item.append(recipeContent);
    //Anf finally append the grid-item to the parent grid-container element
    document.getElementById("grid-container").appendChild(grid_item);
  }
  //This clears the value of the input boxes so that the input boxes don't contain any old value
  //making it easier for the user to enter a new value
  document.getElementById("ingredients").value = "";
  document.getElementById("recipe").value = "";
}

//This function displays the value of the button pressed on the calculator.html page
function display(value) {
  document.getElementById("screen-value").value += value;
}

//This function performs the operation inputted by the user on the calculator.html page
function calculate() {
  //Get the value entered by the user
  var screenValue = document.getElementById("screen-value").value;
  //Evaluate the expression entered by the user
  var answer = eval(screenValue);
  //Set the screen to show answer
  document.getElementById("screen-value").value = answer;
}

//Clear the screen i.e., set the screen-value to null
function clearScreen() {
  document.getElementById("screen-value").value = "";
}
