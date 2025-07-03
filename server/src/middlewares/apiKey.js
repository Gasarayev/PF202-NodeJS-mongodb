const { API_KEY } = require("../config/config");

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["api-key"];
  if (!apiKey) {
    res.status(401).json({
      message: "no api key provided",
    });
  } else {
    if (apiKey === API_KEY) {
      next();
    } else {
      res.status(401).json({
        message: "invalid api key",
      });
    }
  }
};

module.exports = apiKeyMiddleware;