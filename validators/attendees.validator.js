const Joi = require("joi");

const meeting_participant_type = ["host", "participant"];
export const exceptionSlotSchema = Joi.object({
  user_id: Joi.number().greater(0),
  meeting_id: Joi.number().greater(0),
  type: Joi.string()
    .valid(...meeting_participant_type)
    .required()
    .messages({
      "any.only": `meeting participant type must be one of ${meeting_participant_type.join(
        ", "
      )}`,
      "any.required": "meeting participant type is required",
    }),
  accepted: Joi.boolean(),
  notes: Joi.string(),
  optional: Joi.boolean().required().messages({
    "any.required": "optional is required",
  }),
});
