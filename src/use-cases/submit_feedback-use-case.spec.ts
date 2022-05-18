import { SubmitFeedbackUseCase } from './submit_feedback-use-case';

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  // { create: async () => { } },
  // { sendMail: async () => { } },
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy },
)

describe('Submit feedback', () => {
  it('should be able to submit a  feedback', async () => {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comments: 'exemple comments',
      screenshot: 'data:image/png;base64,hudasdjia'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  });

  it('should not be able  to sumbit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comments: 'exemple comments',
      screenshot: 'data:image/png;base64,hudasdjia'
    })).rejects.toThrow();
  });

  it('should not be able  to sumbit feedback without comments', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comments: '',
      screenshot: 'data:image/png;base64,hudasdjia'
    })).rejects.toThrow();
  });
  it('should not be able  to sumbit feedback with am invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comments: 'exemple comments',
      screenshot: 'test.jpg'
    })).rejects.toThrow();
  });
})