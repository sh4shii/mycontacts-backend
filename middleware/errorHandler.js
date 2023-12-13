const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode? res.statusCode : 500;
    if(statusCode == 400){
        res.json({title: "Not found", message: err.message, stackTrace : err.stack})
    }
    if(statusCode == 500){
        res.json({title: "Validation failed", message: err.message, stackTrace : err.stack})
    }
};

module.exports = errorHandler;