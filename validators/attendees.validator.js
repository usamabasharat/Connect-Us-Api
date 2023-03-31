const Joi = require("joi");
const CONST = require("../const");

const attendeesSchema = Joi.object({
  user_id: Joi.number().greater(0),
  meeting_id: Joi.number().greater(0),
  type: Joi.string()
    .valid(...CONST.meeting_participant_type)
    .required()
    .messages({
      "any.only": `${CONST.TYPE_MESSAGE} ${CONST.meeting_participant_type.join(
        ", "
      )}`,
      "any.required": `${CONST.PARTICIPANT_REQUIRED}`,
    }),
  accepted: Joi.boolean(),
  notes: Joi.string(),
  optional: Joi.boolean().required().messages({
    "any.required": `${CONST.OPTIONAL_REQUIRED}`,
  }),
});

module.exports = {
 attendeesSchema
};
