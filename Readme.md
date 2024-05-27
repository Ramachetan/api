# Basic Full-Stack Web Application for Inventory Management

This is a full-stack web application with a Python backend and a JavaScript frontend.

![image](https://github.com/Ramachetan/api/assets/24260211/00679b68-122c-4069-aeb8-4591b6b18e25)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3
- A modern web browser

### Installing

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory and run `uvicorn main:app --reload` to start the backend server.
3. Open the `frontend/index.html` file in your web browser to view the frontend.

## Project Structure

- `.hintrc`: Configuration file for hinting.
- `backend/`: Contains the Python backend code.
    - `main.py`: The main entry point for the backend server.
    - `models.py`: Defines the data models used in the application.
    - `schemas.py`: Defines the schemas for data validation.
    - `test.sqbpro`: SQLite database file.
- `frontend/`: Contains the frontend code.
    - `index.html`: The main HTML file for the frontend.
    - `script.js`: Contains the JavaScript code for the frontend.
    - `styles.css`: Contains the CSS styles for the frontend.

## Usage

Click the "List Items" button on the frontend to fetch and display items from the backend.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
