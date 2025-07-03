const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  postProduct,
} = require("../controllers/userFormControllers");

// const validateProduct = require("../middlewares/validateProduct");
// const apiKeyMiddleware = require("../middlewares/apiKey");

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProductById);
router.patch("/:id", updateProductById);
router.post("/", postProduct);

module.exports = router;