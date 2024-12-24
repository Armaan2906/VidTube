//ensures that errors occurring within asynchronous functions 
//are properly passed to the next middleware, 
//which is typically an error-handling middleware.

const asyncHandler = (requestHandler) => {
    return(req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}