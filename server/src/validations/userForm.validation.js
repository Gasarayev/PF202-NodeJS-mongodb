const Joi = require("joi");

const userFormValidationSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.empty": `"name" cannot be empty`,
    "any.required": `"name" is required`,
  }),
  surname: Joi.string().min(2).max(50).required().messages({
    "string.empty": `"surname" cannot be empty`,
    "any.required": `"surname" is required`,
  }),
  email: Joi.string().email().required().messages({
    "string.email": `"email" must be a valid email`,
    "any.required": `"email" is required`,
  }),
  profileImage: Joi.string().uri().optional().messages({
    "string.uri": `"profileImage" must be a valid URL`,
  }),
  message: Joi.string().max(500).optional(),
});

module.exports = userFormValidationSchema;
