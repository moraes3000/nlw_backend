import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comments, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comments,
        screenshot
      }
    })
  }
}