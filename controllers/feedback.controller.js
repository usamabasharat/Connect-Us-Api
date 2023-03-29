const feedbackService = require("../dal/feedback.dal")
const feedbackValidator = require("../validators/feedback.validator");

module.exports = {
  createFeedback,
  getFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
};

async function createFeedback(req, res) {
  const reqBody = req.body;
  const { error } = feedbackValidator.feedbackSchema.validate(reqBody);
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
  }
  const feedback = await feedbackService.createFeedback(reqBody);
  res.send({ feedback });
}

async function getFeedback(req, res) {
  let feedback = await feedbackService.getFeedback();
  res.send(feedback);
}

async function getFeedbackById(req, res) {
  let { id } = req.params;
  id = Number(id);
  let feedback = await feedbackService.getFeedbackById(id);
  if (!feedback) {
    return res.send({ message: "Feedback does not exist" });
  }
  else res.send(feedback);
}

async function updateFeedback(req, res) {
  let { id } = req.params;
  id = Number(id);
  let reqObject = req.body;
  const { error } = feedbackValidator.feedbackSchema.validate({
    ...reqObject,
  });
  if (error !== undefined) {
    return res.send({ message: "Invalid Body", error });
  }
  let updateFeedback = await feedbackService.updateFeedback({
    where: { id },
    data: {
      ...reqObject,
    },
  });
  res.send(updateFeedback);
}

async function deleteFeedback(req, res) {
  let { id } = req.params;
  id = Number(id);
  let deleteFeedback = await feedbackService.deleteFeedback(id);
  res.send(deleteFeedback);
}
