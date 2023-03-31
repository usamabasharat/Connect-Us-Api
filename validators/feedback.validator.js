const Joi = require("joi");
const CONST = require("../const");

const feedbackSchema = Joi.object({
  type:Joi.string()
  .valid(...CONST.question_type)
  .required()
  .messages({
    "any.only": `${CONST.FEEDBACK_MESSAGE} ${CONST.question_type.join(
      ", "
    )}`,
    "any.required": `${CONST.FEEDBACK_REQUIRED}`,
  }),
  user_id: Joi.number().greater(0),
  meeting_id: Joi.number().greater(0),
  evaluated_by: Joi.number().greater(0),
  score: Joi.number().greater(0),
  json_feedback: Joi.object({
    name: Joi.string().required(),
  }),
})

module.exports = {
  feedbackSchema
};
