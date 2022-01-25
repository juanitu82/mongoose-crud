
const errorHandling = (error, req, res, next) => {
    console.log(req.originalUrl)
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            url: error.originalUrl
        }
    });
};

module.exports = errorHandling
