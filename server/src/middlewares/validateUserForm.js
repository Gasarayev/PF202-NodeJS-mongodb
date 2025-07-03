const userFormValidationSchema = require("../validations/userForm.validation");

const validateUserForm = (req, res, next) => {
  const { error } = userFormValidationSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      errors: error.details.map((detail) => detail.message),
    });
  } else {
    next();
  }
};


module.exports = validateUserForm;