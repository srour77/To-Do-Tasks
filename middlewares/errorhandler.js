let {CustomError}= require('../customerror/customerror')
function errorHandler(err, req, res, next){
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({'msg': err.msg})
    }
    return res.status(500).json('oops! something went wrong')
}

module.exports = errorHandler