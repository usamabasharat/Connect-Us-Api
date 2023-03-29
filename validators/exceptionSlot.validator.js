const Joi = require("joi");

const exceptionSlotSchema = Joi.object({
  from: Joi.date().timestamp().required.messages({
    "any.required": "from is required",
  }),
  to: Joi.date().timestamp().required.messages({
    "any.required": "from is required",
  }),
  user_id: Joi.number().greater(0),
});

module.exports = {
  exceptionSlotSchema
};