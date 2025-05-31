const HttpError = require("./HttpError");
class BadRequestError extends HttpError{
    constructor(message = "Resource not found") {
        super(message, 400);
        this.name = "BadRequestError";
        
    }
}

module.exports = BadRequestError;