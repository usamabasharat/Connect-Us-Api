const Joi = require("joi");
const CONST = require("../const")

const questionsSchema = Joi.object({
  text: Joi.string().required().messages({
    "any.required": `${CONST.QUESTION_REQUIRED}`,
  }),
  type: Joi.string()
    .valid(...CONST.question_type)
    .required()
    .messages({
      "any.only": `${CONST.QUESTION_MESSAGE} ${CONST.question_type.join(", ")}`,
      "any.required": `${CONST.QUESTION_TYPE}`,
    }),
  answer_type: Joi.string()
    .valid(...CONST.question_answer_type)
    .required()
    .messages({
      "any.only": `${CONST.ANSWER_TYPE} ${CONST.question_answer_type.join(
        ", "
      )}`,
      "any.required": `${CONST.ANSWER_REQUIRED}`,
    }),
    question_answer: Joi.object({
      name: Joi.string().required(),
    }),
  created_by: Joi.number().greater(0),
});

module.exports = {
  questionsSchema
};