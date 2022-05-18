export interface FeedbackCreateData {
  type: string;
  comments: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}