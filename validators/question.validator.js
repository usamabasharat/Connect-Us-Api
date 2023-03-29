const Joi = require("joi");

const question_type = [
  "mock",
  "codereview",
  "one",
  "annual",
  "biannual",
  "quarterly",
];
const question_answer_type = ["numeric", "string", "boolean", "options"];

const questionsSchema = Joi.object({
  text: Joi.string().required().messages({
    "any.required": "Question is required",
  }),
  type: Joi.string()
    .valid(...question_type)
    .required()
    .messages({
      "any.only": `Question Type must be one of ${question_type.join(", ")}`,
      "any.required": "Question Type is required",
    }),
  answer_type: Joi.string()
    .valid(...question_answer_type)
    .required()
    .messages({
      "any.only": `Question Answer Type must be one of ${question_answer_type.join(
        ", "
      )}`,
      "any.required": "Question Answer Type is required",
    }),
  created_by: Joi.number().greater(0),
});

module.exports = {
  questionsSchema
};