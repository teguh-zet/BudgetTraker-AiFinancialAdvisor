const { success } = require('zod/v4');
const HttpError = require('../errors/HttpError');

function errorHandler(err, req, res, next) {
    
    if(err instanceof HttpError){
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
        })
        return;
    }

    if(process.env.NODE_ENV === 'production') {
        if(err instanceof Error){
            res.status(500).json({
                success: false,
                message: err.message
            });
            return;
        }
        
    }
    console.error(err);

    return res.status(500).json({
        status: 'error',
        msessage: 'Internal Server Error',
    })
}
module.exports = errorHandler;