class CustomError extends Error{
    constructor(_msg, _statusCode){
        super(_msg)
        this.statusCode = _statusCode
    }
}

function createCustomError(msg, statusCode){
    return new CustomError(msg, statusCode)
}

module.exports = {createCustomError, CustomError}