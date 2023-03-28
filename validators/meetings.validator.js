const Joi = require("joi");

export const scheduleSlotSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Title is required",
  }),
  description: Joi.string().required().messages({
    "any.required": "Description is required",
  }),
  attachments: Joi.string().required().messages({
    "any.required": "Attachment is required",
  }),
  url: Joi.string().required().messages({
    "any.required": "Question is required",
  }),
});
