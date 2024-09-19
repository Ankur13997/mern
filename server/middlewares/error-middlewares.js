
const errorMiddleware = (err,req,res,next) => {
    const message = err.message || "Backened Error";
    const extra = err.extra || "Error from the backened";

    res.json({message,extra});
}

module.exports = errorMiddleware;