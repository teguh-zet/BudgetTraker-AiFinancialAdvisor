const HttpError = require("./HttpError");
class ForbiddenError extends HttpError{
    constructor(message = "Resource not found") {
        super(message, 403);
        this.name = "ForbiddenError";
        
    }
}

module.exports = ForbiddenError;