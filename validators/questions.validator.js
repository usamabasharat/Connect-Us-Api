const Joi = require("joi");
const CONST = require("../const")

const questionsSchema = Joi.object({
  text: Joi.string().required().messages({
    "any.required": `${CONST.QUESTION_REQUIRED}`,
  }),
  type: Joi.string()
    .valid(...CONST.QUESTION_TYPE_ENUM)
    .required()
    .messages({
      "any.only": `${CONST.QUESTION_MESSAGE} ${CONST.QUESTION_TYPE_ENUM.join(", ")}`,
      "any.required": `${CONST.QUESTION_TYPE}`,
    }),
  answer_type: Joi.string()
    .valid(...CONST.QUESTION_ANSWER_TYPE)
    .required()
    .messages({
      "any.only": `${CONST.ANSWER_TYPE} ${CONST.QUESTION_ANSWER_TYPE.join(
        ", "
      )}`,
      "any.required": `${CONST.ANSWER_REQUIRED}`,
    }),
    question_answer: Joi.object({
      answers : Joi.array().required(),
    }),
  created_by: Joi.number().greater(0),
});

module.exports = {
  questionsSchema
};
