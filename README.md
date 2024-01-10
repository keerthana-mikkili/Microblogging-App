# Microblogging App

## Project Description
This project is a straightforward micro-blogging application implemented using JavaScript. Each blog entry includes essential details such as title, content, author, and creation date. The primary objective is to leverage JavaScript for functionality and employ SCSS for styling the application.

## Technologies Used
1. JavaScript: Adds behavior and interactivity to the microblogging application.
2. HTML: Structures the microblogging content.
3. CSS/SASS: Styles the microblogging application, enhancing its visual appeal.

## Instructions to Run the Project Locally:
To set up the project locally, follow these steps:

1. Clone the repository: 
>git clone <repository_url>
2. Install dependencies locally:
css
>npm init
>npm i sass --save-dev
3. Convert SCSS styles to CSS:
bash
>npx sass/main.scss dist/main.css
4. Use a live server extension in your IDE to run the project.

## Steps to Push Changes to Remote Branch:
If you need to push changes to the remote branch, follow these steps:

1. Add changes to your local branch:
>git add .
2. Commit changes with an appropriate message:
>git commit -m "Give appropriate message"
3. Push changes to the global branch:
>git push origin main

## User Requirements:
1. View all existing blogs fetched from the JSON file using XMLHttpRequest.
2. Click on a blog to expand its content using CSS transitions.
3. Add a new blog by clicking the create button, opening an editable card with blog details (not required to save on the server).
4. Add a blog by entering title, content, and author, with the created field showing date and time.
5. Update a blog as complete by clicking an update icon, allowing edits to the content and author fields.
