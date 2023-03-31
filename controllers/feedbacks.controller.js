const feedbackService = require("../dal/feedbacks.dal")
const feedbackValidator = require("../validators/feedback.validator");
const CONST = require("../const");

module.exports = {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
};

async function createFeedback(req, res) {
  const reqBody = req.body;
  const { error } = feedbackValidator.feedbackSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  const feedback = await feedbackService.createFeedback(reqBody);
  res.send({ feedback });
}

async function getFeedbacks(req, res) {
  let feedbacks = await feedbackService.getFeedbacks();
  res.send(feedbacks);
}

async function getFeedbackById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let feedback = await feedbackService.getFeedbackById(id);
  if (!feedback) {
    return res.send({ message: `${CONST.NO_FEEDBACK}` });
  }
  else res.send(feedback);
}

async function updateFeedback(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = feedbackValidator.feedbackSchema.validate(reqObject);
  if (error !== undefined) {
    return res.send({ message: `${CONST.INVALID_BODY}`, error });
  }
  let updateFeedback = await feedbackService.updateFeedback({
    where: { id },
    data: reqObject,
  });
  res.send(updateFeedback);
}

async function deleteFeedback(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteFeedback = await feedbackService.deleteFeedback(id);
  res.send(deleteFeedback);
}
