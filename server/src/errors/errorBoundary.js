module.exports = (error, req, res, next) => {
  console.error(error.stack);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    message: error.message || "Internal Server Error",
  });
};