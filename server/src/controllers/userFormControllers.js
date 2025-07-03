const {
  getAll,
  getById,
  deleteById,
  updateById,
  post,
} = require("../services/userFormServices");

const formatMongoData = require("../utils/formatMongoData");
const sendEmail = require("../utils/sendEmail");

// Get all user forms
const getAllProducts = async (req, res, next) => {
  try {
    const products = await getAll();
    if (!products) throw new Error("products not found!");
    res.status(200).json({
      message: "products retrieved successfully!",
      data: formatMongoData(products),
    });
  } catch (error) {
    next(error);
  }
};

// Get user form by id
const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getById(id);
    if (!product) {
      return res.status(404).json({
        message: "product not found with given id",
        data: null,
      });
    }
    res.status(200).json({
      message: "product retrieved successfully!",
      data: formatMongoData(product),
    });
  } catch (error) {
    next(error);
  }
};

// Delete user form by id
const deleteProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteById(id);
    if (!deletedProduct) {
      return res.status(404).json({
        message: "product not found with given id",
        data: null,
      });
    }
    res.status(200).json({
      message: "product deleted successfully!",
      data: formatMongoData(deletedProduct),
    });
  } catch (error) {
    next(error);
  }
};

// Update user form by id
const updateProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Əgər fayl varsa, Cloudinary məlumatlarını da əlavə edirik
    if (req.file) {
      updateData.profileImage = req.file.path;
      updateData.public_id = req.file.filename || req.file.public_id;
    }

    const updatedProduct = await updateById(id, updateData);
    if (!updatedProduct) {
      return res.status(404).json({
        message: "product not found with given id",
        data: null,
      });
    }
    res.status(200).json({
      message: "product updated successfully!",
      data: formatMongoData(updatedProduct),
    });
  } catch (error) {
    next(error);
  }
};

// Post new user form
const postProduct = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error("img required!");
    }
    const profileImageUrl = req.file.path;
    const publicId = req.file.filename || req.file.public_id;

    const formData = {
      ...req.body,
      profileImage: profileImageUrl,
      public_id: publicId,
    };

    const postedProduct = await post(formData);

    await sendEmail({
      to: formData.email, // formdan gələn email-ə
      subject: "Xoş gəlmisiniz!",
      text: `Hörmətli ${formData.name} ${formData.surname}, xoş gəlmisiniz! Bizimlə əlaqə saxladığınız üçün təşəkkür edirik.`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f7fa;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      background-color: #fff;
      margin: 0 auto;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      color: #333;
    }
    h1 {
      color: #4CAF50;
      font-size: 24px;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #999;
      text-align: center;
    }
    a.button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white !important;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Xoş gəlmisiniz, ${formData.name}!</h1>
    <p>
      Hörmətli ${formData.name} ${formData.surname},<br>
      Bizimlə əlaqə saxladığınız üçün təşəkkür edirik.<br>
      Sizinlə işləməkdən məmnunuq!
    </p>
    <a href="https://emilgasarayev.com/" class="button">Saytımıza baxın</a>
    <div class="footer">
      © 2025 Sənin Şirkət. Bütün hüquqlar qorunur.
    </div>
  </div>
</body>
</html>
`,
    });

    res.status(201).json({
      message: "product posted successfully and email sent!",
      data: postedProduct,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  postProduct,
};
