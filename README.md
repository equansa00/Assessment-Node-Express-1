# My Project
# Assessment: Node/Express 1

This project was developed as part of a Node.js and Express.js assessment. The main objectives were to understand and demonstrate proficiency in asynchronous operations, express routing, error handling, and working with external APIs.

## Project Overview

### 1. Command-Line Script (`urls.js`)

- Reads the contents of a specified file, with each line containing a URL.
- Downloads the HTML content of each URL.
- Saves the HTML content to a new file, named after the hostname of the URL.

### 2. Express App (`app.js`)

- A simple Express.js server that listens on port 3000.
- Contains a POST route that accepts a list of GitHub usernames and returns user information (name and bio).

## Installation

1. Clone this repository:
   `
   git clone <repository_url>
Navigate to the project directory:
cd node-express-1

Install the required packages:
npm install

Usage
Running the Command-Line Script
node urls.js <filename>

Starting the Express Server
node app.js

Visit http://localhost:3000 in your browser or use tools like Postman or CURL to make POST requests.

Issues
For a detailed breakdown of issues found in the initial code and the subsequent fixes, refer to issues.md.