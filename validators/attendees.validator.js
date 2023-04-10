const Joi = require("joi");
const CONST = require("../const");

const attendeesSchema = Joi.object({
  user_id: Joi.number().greater(0),
  meeting_id: Joi.number().greater(0),
  type: Joi.string()
    .valid(...CONST.MEETING_PARTICIPANT_TYPE)
    .required()
    .messages({
      "any.only": `${CONST.TYPE_MESSAGE} ${CONST.MEETING_PARTICIPANT_TYPE.join(
        ", "
      )}`,
      "any.required": `${CONST.PARTICIPANT_REQUIRED}`,
    }),
  accepted: Joi.boolean(),
  notes: Joi.string(),
  optional: Joi.boolean(),
});

module.exports = {
 attendeesSchema
};
