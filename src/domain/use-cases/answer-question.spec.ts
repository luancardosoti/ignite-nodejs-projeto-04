import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answer-question';

test('create an answer', () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase();

  const { answer } = answerQuestionUseCase.execute({ 
    instructorId: '',
    questionId: '',
    content: 'Nova resposta'
  })

  expect(answer.content).toEqual('Nova resposta')
})