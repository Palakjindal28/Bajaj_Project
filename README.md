## BFHL REST API – Modular Backend with AI Integration

This repository contains a production-ready, modular Node.js REST API developed as part of the BFHL evaluation task.
The API strictly follows the required response structure, validation rules, and error-handling guidelines, and includes AI integration using Google Gemini.

## Objective

Develop and host two public REST APIs:

POST /bfhl – Perform mathematical operations or AI-based question answering

GET /health – Health check endpoint

The solution focuses on:

Strict API response structure

Correct HTTP status codes

Robust input validation

Graceful error handling

Secure and modular architecture


## Tech Stack

Node.js

Express.js

Axios

Google Gemini AI (gemini-2.5-flash)

dotenv

JavaScript (ES6)


## Environment Variables
Create a .env file in the root directory:

PORT=3000

OFFICIAL_EMAIL=you email

GEMINI_API_KEY=YOUR_GEMINI_API_KEY


## Running the Project Locally

npm install

npm start

Server will run on:

http://localhost:3000

## AI Integration Details

Uses Google Gemini API

Model: gemini-2.5-flash

POST-based AI calls

Secure API key handling via environment variables

AI answers normalized to single-word output
