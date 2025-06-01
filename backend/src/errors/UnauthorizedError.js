const HttpError = require("./HttpError");
class UnauthorizedError extends HttpError{
    constructor(message = "Resource not found") {
        super(message, 401);
        this.name = "UnauthorizedError";
        
    }
}

module.exports = UnauthorizedError;