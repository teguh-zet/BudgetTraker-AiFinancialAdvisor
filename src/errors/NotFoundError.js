const HttpError = require("./HttpError");
class NotFound extends HttpError{
    constructor(message = "Resource not found") {
        super(message, 404);
        this.name = "NotFoundError";
        
    }
}

module.exports = NotFound;