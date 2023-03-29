const Joi = require("joi");

const week_day = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

const genericSlotSchema = Joi.object({
  from: Joi.date().timestamp().required.messages({
    "any.required": "from is required",
  }),
  to: Joi.date().timestamp().required.messages({
    "any.required": "from is required",
  }),
  user_id: Joi.number().greater(0),
  type:Joi.string()
  .valid(...week_day)
  .required()
  .messages({
    "any.only": `Week day must be one of ${week_day.join(
      ", "
    )}`,
    "any.required": "Week Day is required",
  }),
});

module.exports = {
  genericSlotSchema
};