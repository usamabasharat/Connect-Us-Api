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
  type: Joi.string()
    .valid(...CONST.meeting_participant_type)
    .required()
    .messages({
      "any.only": `${CONST.TYPE_MESSAGE} ${CONST.meeting_participant_type.join(
        ", "
      )}`,
      "any.required":`${CONST.PARTICIPANT_REQUIRED}`,
    }),
});

module.exports = {
  scheduleSlotSchema
};