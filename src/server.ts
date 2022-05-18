import express from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json())

app.post('/feedbacks', async (req, res) => {
  // console.log(req.body)
  const { type, comments, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comments,
      screenshot
    }
  })


  return res.status(201).json(feedback)
})

app.listen(3333, () => {
  console.log('HTTP server running!')
})