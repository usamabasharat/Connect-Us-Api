const Joi = require("joi");
const CONST = require("../const")

const scheduleSlotSchema = Joi.object({
  from: Joi.date().timestamp().required().messages({
    "any.required": `${CONST.FROM_TIME}`,
  }),
  to: Joi.date().timestamp().required().messages({
    "any.required": `${CONST.TO_TIME}`,
  }),
  meeting_id: Joi.number().greater(0),
  user_id: Joi.number().greater(0),
});

module.exports = {
  scheduleSlotSchema
};
