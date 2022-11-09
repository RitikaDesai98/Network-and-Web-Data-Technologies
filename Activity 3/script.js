/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Hello INFSCI 2560!");

console.log(document.getElementById("button-one"));

// Task 1 - Selecting Elements
function button_one_function() {
  var result = document.getElementsByTagName("em")[0].innerHTML;
  console.log(result);
}

const button1 = document.getElementById("button-one");
button1.addEventListener("click", button_one_function);

// Task 2 - Styling Tables
function button_two_function() {
  if (document.getElementsByTagName) {
    var rows = document.getElementsByTagName("tr");
    let i;
    for (i = 0; i < rows.length; i++) {
      if (i % 2 == 0) {
        rows[i].className = "even";
      } else {
        rows[i].className = "odd";
      }
    }
  }
  console.log("Button two clicked!");
}

const button2 = document.getElementById("button-two");
button2.addEventListener("click", button_two_function);

//Task 3 - Modify Grocery List

function button_three_function() {
  var l = document.getElementById("gl").getElementsByTagName("li").length;
  var li = document.createElement("LI");
  li.innerHTML = "Wine";
  document.getElementById("gl").appendChild(li);
  let i = 0;
  for (i = 0; i < l; i++) {
    if (i % 2 == 0) {
      document.getElementsByTagName("li")[i].style["text-decoration"] =
        "line-through";
    }
  }
  console.log("Button three clicked!");
}

const button3 = document.getElementById("button-three");
button3.addEventListener("click", button_three_function);

var jokes = [
  "Guess the number of programmers it takes to change a light bulb? Zero its a hardware problem",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "Real programmers count from 0.",
  "Why did the programmer quit his job? Because he didnt get arrays.",
  "A foo walks into a bar takes a look around and says Hello World",
  "0 is false 1 is true right? 1",
  "Things arent always #000000 and #FFFFFF.",
  "What is the most used language in programming? Profanity",
  "!False its funny because its True",
  "You had me at Hello World",
  "2b||!2b",
  "Yesterday I changed the name on my wifi to Hack if you can. Today I found it named Challenge Accepted",
  "A programmer is a person who fixed a problem that you didnt know you had in a way you dont understand",
  "How can you tell if a computer geek is an extrovert? They stare at your shoes when you talk instead of their own.",
  "I would love to change the world but they wont give me the source code.",
  "If at first you dont succedd call it version 1.0",
  "Computers make very fast very accurate mistakes",
  "I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.",
  "Knock Knock... Whos there? Art... Art Who? R2D2",
  "Hilarious and amazingly true thing: if a pizza has a radius (z) and a depth (a) that pizzas volume can be defined Pi*z*z*a.",
];

function button_four_function() {
  var randomNumber = Math.floor(Math.random() * 20);
  document.getElementById("jokeDisplay").innerHTML = jokes[randomNumber];
}

const button4 = document.getElementById("button-four");
button4.addEventListener("click", button_four_function);

