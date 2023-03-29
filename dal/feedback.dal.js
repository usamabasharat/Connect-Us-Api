const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createFeedback,
  getFeedback,
  getFeedbackById,
  deleteFeedback,
  updateFeedback
};

function createFeedback(feedbackData) {
  return prisma.feedbacks.create({
    data: { ...feedbackData }
  });
}

function getFeedback() {
  return prisma.feedbacks.findMany()
}

function getFeedbackById(id) {
  return prisma.feedbacks.findUnique({
    where: { id }
  })
}

function deleteFeedback(id) {
  return prisma.feedbacks.delete({
    where: { id },
  })
}

function updateFeedback(data, options) {
  return prisma.feedbacks.update(data, options);
}
