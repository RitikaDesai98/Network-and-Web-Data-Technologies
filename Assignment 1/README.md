# Personal website!

This website helps the user to add tasks, keep track of their budget, save recipes, and calculate basic mathematical equations. It is pretty much a smaller version of a basic mobile phone.

## What's in this project?

`README.md`:
That's this file where each page is described highlighting it's main features and functions.

`home.html`:
This is the main web page for the site. It contains description about each page and an overall introduction to the website and a little bit of how to do what in each page.

`tasks.html`:
This page is designed to show users a bunch of tasks created by them. It allows a user to input a task and once completed mark it off by clicking on the checkbox. ToDo lists always give me some sort of satisfaction while ticking things off it.

`budget.html`:
This page shows the user where they spent how much of their money. The user can input the name of the expense and the amount spent and also calculate the total money spent. Keeping a track of money is always important and helps give you a sense of responsibility on how much you've spent.

`recipe.html`:
This page helps users to keep a track of recipes. It allows a user to input a list of ingredients and the procedure for making the dish. Most of the time I forget to put an ingredient or mess up the steps in a recipe so having it in writing makes it easier and faster for me to cook

`calculator.html`:
This page contains a mini calculator to do the basic add, subtract, divide, multiply functions. Being weak at math, a calculator has pretty much always been a requirement for me to be able to not mess up my numbers

**HTML Semantics Used:**

1. `<main>`: This tag was used to define the main page of the website.
2. `<section>`: This tag was used to define the part of the main page that container the function of that page, i.e., the tasks, the budget, the recipes, the calculator
3. `<footer>`: This contained the Copyrights and some generic text that goes into the footer
4. `<time>`: This tag was used to let the user know the time of the last update made to this website in order to know if they're running the latest version
5. `<header>`: This tag was used to define the heading of each page
6. `<nav>`: This tag was used to create a navigation bar on the left side of the screen which helps users to navigate between the different pages of the website

**Other HTML Tags:**

1. `<iframe>`: This tag was used to embed the really cute doggo on the index page
2. `<img>`: This tag was used to insert a photo of the user as well as the little icons next to each link in the navigation bar.
3. `<input>`: This tag takes input of the specified type by the user
4. `<table>`: This tag was used to format the look of the budget page to show the expense and the amount side by side as well as making it easier to calculate the total
5. `<pre>`: This tag was used in the footer known as the preformatted tag, it preserves the line breaks and spaces
6. `<textarea>`: This tag was used to take input from the user for the ingredients and the recipe as it allows multiline control in input allowing the user to enter text in a better way as compared to regular text input
7. `<a>`: This tag was used to define a link to the other pages in the navigation bar
8. `<ul>, <li>`: These lists tags were used to show a lists of the links in the navigation bar as well as show a list of tasks 

**Other HTML tags used were the generic div, span, p, h1, h3 etc..**

**CSS Styling**:

1. `profileimg`: The border radius are defined to give it a rounded look as well as a width is defined to control the size
2.  `ul, li`: The list style is defined as none as we could use the icons and the checkboxes
3. `active`: The page on which the user is is highlighted in the nav bar using a background-color
4. `a`: The link is stripped off its text-decoration property as well as given a black color to the text
5. `leftnavbar, left-content`: The navbar is given a background color as well as a size and border
6. `nav-item nav-item img`: The navbar links are made to look a certain way using font-size, weight, margin and the icons are sized down to fit the link
7. `input`: The inputs are styled using a border and padding and the outline is set to none. The focus property changes the color of the border to show focus
8. `table`: The table display is set to inline-block so it doesn't spread across the entire page. The headers are set to a different color
9. `grid`: The recipe page is styled to inherit the grid view display placing 2 recipe cards side by side as well as the calculator buttons 
10. `float`: This is used to make the dark/light button float to the right side top corner of the page

**Other commonly used css styling include margin, padding, font-size, font-color, background-color, width, height**

**Javascript Used:**

1. `addTask`: This function takes in the task name as the input and appends the task to the end of the task list
2. `addExpense`: This function takes in the expense name and the amount spent as the input and appends it to the new row created in the table
3. `getTotal`: This function takes the column containing the amount and adds each row and shows the total value
4. `addRecipe`: This function takes in the ingredients and the recipe as the input and adds it to the grid view containing the recipes
5. `display`: This function displays the value of the button pressed on the calculator 
6. `calculate`: This function performs the operation inputted by the user on the calculator
7. `clearScreen`: This function clears the screen i.e., sets the calculator screen to null 
8. `toggleTheme`: This function toggles the theme from light to dark on the home page. I decided to stick to toggling theme only for the home page for now as the other pages would require more formatting to look good in dark mode

**2 EventListeners are added. One for the addExpense function and one for the getTotal function**

[HTML Validation Link](https://validator.w3.org/nu/?doc=https%3A%2F%2Frhd11-personal-website.glitch.me%2F)

[CSS Validation Link](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frhd11-personal-website.glitch.me%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
