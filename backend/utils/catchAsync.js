/* eslint-disable arrow-body-style */
/**
 * This function is a middleware wrapper for Express.js to handle asynchronous route handlers and 
 * middleware more efficiently by catching errors and passing them to the next middleware or error handler
 * 
 * Explanation
 * -----------
    module.exports:
    Exports the function as a module to be used in other parts of your application.
    Function Definition:
    The function takes another function fn as an argument.
    Returning a Middleware Function:
    It returns a new middleware function with the parameters (req, res, next).
    Executing fn:
    It calls the function fn with req, res, and next.
    Error Handling:
    If fn returns a Promise and it gets rejected, the .catch method catches the error and calls next(err), 
    which passes the error to the next middleware or the error handler in the Express.js stack.
 * 
*/
//Here this wrapper's next catches error in global error handler under errorController.js
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

// This function catches all error from aysnc functions
