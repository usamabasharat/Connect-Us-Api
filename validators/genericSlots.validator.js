const Joi = require("joi");
const CONST = require("../const");

const genericSlotSchema = Joi.object({
  from: Joi.date().timestamp().required().messages({
    "any.required": `${CONST.FROM_TIME}`,
  }),
  to: Joi.date().timestamp().required().messages({
    "any.required": `${CONST.TO_TIME}`,
  }),
  user_id: Joi.number().greater(0),
  type:Joi.string()
  .valid(...CONST.week_day)
  .required()
  .messages({
    "any.only": `${CONST.WEEKDAY_MESSAGE} ${CONST.week_day.join(
      ", "
    )}`,
    "any.required": `${CONST.WEEKDAY_REQUIRED}`,
  }),
});

module.exports = {
  genericSlotSchema
};
