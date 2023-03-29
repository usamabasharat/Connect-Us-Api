const Joi = require("joi");

const scheduleSlotSchema = Joi.object({
  from: Joi.date().timestamp().required.messages({
    "any.required": "from is required",
  }),
  to: Joi.date().timestamp().required.messages({
    "any.required": "from is required",
  }),
  meeting_id: Joi.number().greater(0),
  user_id: Joi.number().greater(0),
});

module.exports = {
  scheduleSlotSchema
};