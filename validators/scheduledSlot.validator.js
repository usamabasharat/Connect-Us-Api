const Joi = require("joi");

const meeting_participant_type=['host', 'participant'];

const scheduleSlotSchema = Joi.object({
  from: Joi.date().timestamp().required().messages({
    "any.required": "from is required",
  }),
  to: Joi.date().timestamp().required().messages({
    "any.required": "from is required",
  }),
  meeting_id: Joi.number().greater(0),
  user_id: Joi.number().greater(0),
  type: Joi.string()
    .valid(...meeting_participant_type)
    .required()
    .messages({
      "any.only": `meeting participant type must be one of ${meeting_participant_type.join(
        ", "
      )}`,
      "any.required": "meeting participant type is required",
    }),
});

module.exports = {
  scheduleSlotSchema
};