const Joi = require("joi");
const CONST = require("../const");

const scheduleSlotSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": `${CONST.TITLE_REQUIRED}`,
  }),
  description: Joi.string().required().messages({
    "any.required": `${CONST.DESCRIPTION_REQUIRED}`,
  }),
  attachments: Joi.string().required().messages({
    "any.required": `${CONST.ATTACHMENT_REQUIRED}`,
  }),
  url: Joi.string().required().messages({
    "any.required": `${CONST.QUESTION_REQUIRED}`,
  }),
});

module.exports = {
  scheduleSlotSchema,
};
