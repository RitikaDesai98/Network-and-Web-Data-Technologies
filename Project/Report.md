## INFSCI 2560 Group Project

### Group Members:

1. Ritika Desai (rhd11@pitt.edu)
2. Rupesh Anusuri (rua14@pitt.edu)
3. Rodrigo Almeida (roa48@pitt.edu)
4. Eric Laslo (erl67@pitt.edu)

### Introduction:

Hello, welcome to our chat website! This website allows you to create an account through your Google account. Once you create an account, you can go to your messages to send a message to another registered user. Using the search bar, type the email address of the friend you want to send a message to. Once you send or recieve a message, that user will show up in your chats making it easier for you to open their chat window.

As a regular user, you are allowed to send messages to only the users whose email addresses are known to you. You can change your name as well but not your email address as that is used to identify you as you. You can also delete a message you sent to another user. A user can also delete an entire chat with another user, that is delete all the messages between them and the other user.

An admin can send a message to all the users irrespective of whether they know the email addresses or not.

### Objective:

The objective of this project was to be able to create a platform that allows users to chat with one another without the hassle of sending a friend request and waiting to be accepted. During the pandemic, chat was one of the only ways of keeping in touch and we wanted to create something that allows users to stay in touch without going through a lot of steps. As long as you know the email address of the user you can chat with them. The search functionality takes into consideration the aspect of security and thus shows the user only if the complete email address is typed in. There was a lot to learn in this project. For example, retriving (read) the list of other users the current user is interacting with required to think of a logic that didn't return all the users.

### Contributions:

1. Ritika Desai: Worked on the backend functionalities (user authentication, connecting the database and presisting the data, writing out the routes for the apis, connecting the frontend to backend)
2. Eric Laslo: Worked on bootstrap and HTML to create a responsive chat interface
3. Rodrigo Almeida: Worked on the CSS and other styling for the chat interface making it look more attractive
4. Rupesh Ansuri: Came up with the idea for the project and worked on creating the frontend for the Profile Page

Documentation was contributed to by everyone equally

### Technical Architecture:

Our project is using Express, NodeJS, Mongoose, MongoDB, Passport, HTML, CSS, Bootstrap and Javascript.

Starting with authentication, we used Passport with OAuth to allow the user to use their Google account to create an account and login into our website. If the user is creating an account, our website saves their name, email and googleID to our mongoDB database in order to help us keep a record of the users. This is done using mongoose to create a user model. So the way MVC works in this is the View is the buttons allowing the user to create an account or login, the Model saves the user to the database and the Controller allows the user to authenticate themselves using Google and OAuth

Once the user is authenticated, they are redirected to their messages view. Here they can see a list of the users they have interacted with in the past. If they click on the tile, a chat window opens up. This window shows the messages sent and received with that user. The user can send a new message as well as delete a message sent by them. This makes use of mongoose to create the message model. MVC here is: View is the chat view and the messages between the users, Model is the message model that saves and deletes the messages and Controller is the connection between the view and model that helps to implement the functionality
An additional function for the admin is that the admin is able to send messages to all the users in the website.

The user can also view his profile page which shows the user their details and also allows them to logout of their account. The logout functionality is taken care of by passport. The user can change their name.

### Challenges:

Managing the functionality to send a broadcast message as an admin was a bit tricky
Working with Glitch was a challenge as the versions for passport and mongoose were not compatible and kept causing the website to crash. Maintaining style consistency when using inline bootstrap classes on many differnet pages.

### Future Work:

Features we would like to add would be the ability to share stickers, attachments like images, documents, voice notes, notifications via email or the browser. We didn't get the time to explore libraries that would help us implement these features.

### Conclusion:

In conclusion, the goal of this project was to create a chat app with various functionalities, including creating user profiles, let them add friends, and the ability to send and receive messages. Additionally, the app included functionality for users with admin status to execute some extra C.R.U.D. features. Overall, the project was a success and the chat app is a useful tool for users to connect and communicate with each other. The user profiles and messaging features all work as intended, and the extra functionality for admins adds an additional layer of control and flexibility to the app.

### Special Instructions:

You will need to create an account to access the chat window.
