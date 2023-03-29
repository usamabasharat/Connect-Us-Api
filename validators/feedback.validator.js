const Joi = require("joi");

const feedback_type = ['mock', 'codereview', 'one', 'annual', 'biannual', 'quarterly'];

const feedbackSchema = Joi.object({
  type:Joi.string()
  .valid(...feedback_type)
  .required()
  .messages({
    "any.only": `Feedback type must be one of ${feedback_type.join(
      ", "
    )}`,
    "any.required": "feedback type is required",
  }),
  user_id: Joi.number().greater(0),
  meeting_id: Joi.number().greater(0),
  evaluated_by: Joi.number().greater(0),
  score: Joi.number().greater(0),
})

module.exports = {
  feedbackSchema
};