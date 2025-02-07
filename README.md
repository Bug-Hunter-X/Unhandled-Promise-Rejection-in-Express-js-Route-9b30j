# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: the lack of proper error handling within asynchronous route handlers.  Asynchronous operations (like database queries or external API calls) can throw errors, and if not caught correctly, these errors can lead to silent failures or unexpected behavior.

The `bug.js` file shows an example of an Express.js route that doesn't handle errors properly.  The `bugSolution.js` file demonstrates the corrected version with comprehensive error handling.

## Bug

The `bug.js` file contains an Express.js route that performs an asynchronous operation. If this operation fails, the error is only logged to the console, and no appropriate response is sent to the client.  This results in a silent failure, making debugging difficult.

## Solution

The `bugSolution.js` file shows how to properly handle errors in asynchronous routes.  It uses a `try...catch` block to handle potential errors.  In case of an error, it sends a well-formatted error response to the client with an appropriate HTTP status code (500 Internal Server Error in this case).