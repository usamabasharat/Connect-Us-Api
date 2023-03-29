const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createQuestion,
  getQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion
};

function createQuestion(questionData) {
  return prisma.questions.create({
    data: { ...questionData }
  });
}


function getQuestions() {
  return prisma.questions.findMany()
}

function getQuestionById(id) {
  return prisma.questions.findUnique({
    where: { id }
  })
}

function deleteQuestion(id) {
  return prisma.questions.delete({
    where: { id },
  })
}

function updateQuestion(data, options) {
  return prisma.questions.update(data, options);
}
