const Joi = require("joi");

const feedback_type = ['mock', 'codereview', 'one', 'annual', 'biannual', 'quarterly'];

export const genericSlotSchema = Joi.object({
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
  json_feedback: Joi.object({
    name: Joi.string().required(),
  }),
  // users_feedbacks_user_idTousers: Joi.object({
  //   user_id: Joi.string().required(),
  // }),
  // users_feedbacks_evaluated_byTousers: Joi.object({
  //   evaluated_by: Joi.string().required(),
  // }),
  // meetings: Joi.object({
  //   meeting_id: Joi.string().required(),
  // }),
})

module.exports = {
  feedback
};
