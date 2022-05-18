import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comments: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ) { }


  async execute(resquest: SubmitFeedbackUseCaseRequest) {
    const { type, comments, screenshot } = resquest;

    await this.feedbacksRepository.create({
      type, comments, screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div></div>`,
        `<p>Tipo de Feedback ${type}</p>`,
        `<p>Tipo de Feedback ${comments}</p>`,
      ].join('\n')
    })
  }
}