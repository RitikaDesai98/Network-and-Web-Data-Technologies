### What framework did you pick and why?

I decided to use the React framework. The React framework offers a variety of features that makes it easy to use and program. It makes using JavaScript much simpler. It offers cleaner code that’s straightforward to understand and implement. It is also flexible due to its modular structure. Another reason is React allows us to employ individual parts of the application on both client-side and the server-side, which ultimately boosts the speed of the development process. React also reuses components which saves time as we don’t have to write various codes for the same features and any changes made in a particular part won’t cause problems in other areas. It allows us to also create custom components in HTML quoting. React has good scalability meaning building large sized applications is much easier. The DOM model is a tree-structure, which means that any changes made at the top level can highly impact the lower levels. It also means we need to define the structure of the app at the very beginning, especially when we’re building complex apps. React implements virtual DOM, which is the virtual representation of the DOM that allows us to test changes in the virtual DOM first to see what happens with each modification. When all these parameters are factored in, it increases productivity making React one of the ideal frameworks.

### What about that framework appealed to you, for this project?

React was easy to learn as I have worked with JavaScript in the past as well as with frameworks, so I had a pretty good understanding on how frameworks are meant to be implemented and worked with. There are a huge number of libraries that can be incorporated into the application and extensively used. React doesn’t require us to follow a particular architecture like MVC, we are free to set it up as per the application requirements. It also has a huge community for help online. React avoids making major changes with every update, it takes baby steps or gives you warning with enough time to make it work. The inbuilt React components are easy to work with and understand as they have very few concepts. React is much more conceptual compared to its alternatives. It shows us how we can make better use of vanilla JavaScript in the React way.
For this project, I wanted something that makes the idea I had in mind easy to create. React served that purpose well with everything it brought to the table. React hooks made it easy to add and maintain states and other functionality to function components. Hooks make it simple to manage state logic between components, group comparable logic into a single component, and transfer data between components that don't have props or classes

### What alternative frameworks did you consider?

The main alternatives were Vue.js and Angular. On comparing Vue with React, as a beginner Vue would’ve been easy but since I had used React in the past once, I was familiar with it and decided to go with React. It was an appropriate choice for this project. React is much more famous and widely used. Vue lacks scalability as well as plugins are less. Vue is extra flexible making us question the integrity of the project as we may end up with a fragile software instead of a final working project. The community for Vue isn’t as big as React. Vue is difficult to work with for mobile development as compared to React.
Angular has a much steeper learning curve as compared to Vue and React. When pages have interactive components, Angular can become slow. Integration with third parties is extremely tough. Angular is also not much famous or liked because of its perplexing nature. Angular gives major issues when updating from older versions to newer versions. Angular uses real DOM unlike Vue and React that use the virtual DOM. Two-way binding in Angular can cause performance tradeoffs, especially in old devices. Angular is too sophisticated and verbose for small applications.

### What resources did you read/watch/listen to?

First, to make comparisons I looked at the following sites:

1. [React vs Vue](https://www.codica.com/blog/react-vs-vue/)
2. [Angular vs React](https://www.interviewbit.com/blog/angular-vs-react/)
3. [Angular vs React](https://www.freecodecamp.org/news/angular-vs-react-what-to-choose-for-your-app-2/)
4. [Angular vs Vue](https://kinsta.com/blog/angular-vs-vue/)

Then once I decided to use React I went on to learn and get familiar with React using the following sites:

1. [ReactJS Tutorial](https://reactjs.org/tutorial/tutorial.html)
2. [W3 React Tutorial](https://www.w3schools.com/REACT/DEFAULT.ASP)
3. [React Tutorial App](https://react-tutorial.app/)

I also looked at few apps on the reactjs website:

1. [ReactJS Examples](https://reactjs.org/community/examples.html)

Additionally, I looked at a few examples made with Vue.js here:

1. [VueJS Examples](https://dev.to/nerdjfpb/15-vue-js-project-ideas-beginner-to-expert-with-tutorial-3ec2)

### Describe the site you built for this assignment. What does it do? What components or features of the framework did you explore for this project

I decided to create an expense tracker. It helps you to track your income, expense, and the balance money. The text in the center of the list tile in the History section points out the category. Additionally, the different color borders for the list tile indicates different categories. You can add an entry using the form and categorize it. Adding a negative sign before the amount signifies it as an expense. The values in the income, expense and balance card will update if data is added or deleted. The delete button shifts slightly to the left when the screen size is smaller thus allowing a user to easily click on it (this is done using breakpoints in CSS). Another place where breakpoints was incorporated via Bootstrap was in the three cards which stack up when the screen size is reduced.
React offered a variety of features and components. The most basic way to start off was to split the UI into individual components like the PieChart, the three cards with income, expense and balance, the history, the form to add a new entry are all different components that live individually. They can be easily modified without breaking any other part of the website. All these components come together in the App.js file. React offers hooks that are a great way to maintain state and pass props. The hooks I used for that were the “createContext” and “useContext” hooks. createContext creates a context instance and the useContext provides a way to pass data or state through the component tree without having to pass props down manually through each nested component. Another hook was the “useState” hook which accepts an initial value and returns 2 values, i.e., the current state and a function to update the state. The “useReducer” hook is a better alternative to the “useState” hook when complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized. I made use of the react-minimal-pie-chart to create the pie chart showing the income, balance, and expense. [PieChart](https://www.npmjs.com/package/react-minimal-pie-chart)
