const HttpError = require('../errors/HttpError');

function errorHandler(error, req, res, next) {
    if(error instanceof HttpError){
        res.status(error.statusCode).json({
            success: false,
            message: error.message
        })
        return;
    }

    if(process.env.NODE_ENV === "development") {
        if(error instanceof Error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
            return
        }
    }

    console.error(error)

    return res.status(500).json({
        status: false,
        message: "Server Error"
    })
}

module.exports = errorHandler;