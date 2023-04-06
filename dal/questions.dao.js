const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createQuestion,
  getQuestions,
  getQuestionByType,
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

function getQuestionByType(type) {
  return prisma.questions.findMany({
    where: { type}
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
