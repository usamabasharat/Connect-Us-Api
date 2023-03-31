const questionService = require("../dal/questions.dao");
const questionValidator = require("../validators/question.validator");
const CONST = require("../const");

module.exports = {
  createQuestion,
  getQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
};

async function createQuestion(req, res) {
  const reqBody = req.body;
  const { error } = questionValidator.questionsSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  const question = await questionService.createQuestion(reqBody);
  res.send({ question });
}

async function getQuestions(req, res) {
  let questions = await questionService.getQuestions();
  res.send(questions);
}

async function getQuestionById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let question = await questionService.getQuestionById(id);
  if (!question) {
    return res.send({ message: `${CONST.NO_QUESTION}` });
  }
  else res.send(question);
}

async function updateQuestion(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = questionValidator.questionsSchema.validate(reqObject);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  let updateQuestion = await questionService.updateQuestion({
    where: { id },
    data:reqObject,
  });
  res.send(updateQuestion);
}

async function deleteQuestion(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteQuestion = await questionService.deleteQuestion(id);
  if(deleteQuestion) res.send({ message: `${CONST.QUESTION_DELETED}` });
}
