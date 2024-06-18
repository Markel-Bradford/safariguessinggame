# Safari Animal Guessing Game
## Project Overview
The Safari Animal Guessing Game is a full-stack web application designed to entertain users with a fun and interactive animal guessing game. Leveraging the power of Flask for the backend and React for the frontend, this project demonstrates a seamless integration of technologies to deliver a smooth and engaging user experience.

## Technologies Used
Frontend: React, JavaScript, HTML5, CSS3
Backend: Flask, Python
Web Server: Waitress
CORS Handling: Flask-CORS
Deployment: Render
Key Features
Interactive Gameplay: Users can start a new game, make guesses, and receive real-time feedback on their inputs.
Dynamic Hints: The application provides hints based on user guesses to help them figure out the correct animal.
Responsive Design: The user interface is designed to be responsive, ensuring a consistent experience across various devices and screen sizes.
Cross-Origin Resource Sharing (CORS): Properly configured to allow secure interactions between the frontend hosted on a different domain and the backend server.
Project Structure
Backend:
app.py: Contains the Flask application setup, game logic, and API endpoints.
main.py: Entry point for running the Flask app using the Waitress web server.
requirements.txt: Lists all the dependencies required for the project.
Frontend:
static/index.html: The main HTML file serving the React app.
static/index.css: General styling for the application.
static/WordGame.css: Specific styles for the WordGame component.
static/WordGame.js: Contains the React component responsible for the game’s logic and UI.

## Project Workflow
Start a New Game: Users initiate a new game by making a GET request to the /app/start_game endpoint. The backend selects a random animal from a predefined list and returns the word length and the number of turns allowed.
Make a Guess: Users input their guess, which is sent as a POST request to the /app/make_guess endpoint. The backend processes the guess, updates the game state, and returns feedback including hints and the number of turns remaining.
Real-Time Feedback: The frontend dynamically updates to show the user's progress, including correct guesses, incorrect guesses, and hints to aid in guessing the correct animal.

## Challenges and Solutions
CORS Configuration: Ensuring that the frontend and backend could communicate securely required proper CORS setup in Flask. This was achieved using Flask-CORS to handle cross-origin requests.
Responsive Design: Crafting a responsive and visually appealing UI involved using CSS media queries and flexible layouts to adapt to different screen sizes.

## Deployment
The application is deployed on Render, ensuring a reliable and scalable environment to handle user requests efficiently. The backend is served using Waitress, a production-ready WSGI server for Python web applications.

