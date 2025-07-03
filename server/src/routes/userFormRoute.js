const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  postProduct,
} = require("../controllers/userFormControllers");

const validateUserForm = require("../middlewares/validateUserForm");
const apiKeyMiddleware = require("../middlewares/apiKey");

router.get("/", apiKeyMiddleware, getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProductById);
router.patch("/:id", updateProductById);
router.post("/", apiKeyMiddleware, validateUserForm, postProduct);

module.exports = router;
