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
const upload = require("../middlewares/multer");

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProductById);
router.patch("/:id",upload.single("profileImage"), updateProductById);
router.post("/", apiKeyMiddleware, validateUserForm, upload.single("profileImage"), postProduct);

module.exports = router;
