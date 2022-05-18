import express from 'express';
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

const app = express();

app.use(express.json())

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "da8202202252d0",
    pass: "1d6effcda47760"
  }
});

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

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Bruno Barbeiro Moraes <bruno_bmoraes@hotmail.com>',
    subject: 'Novo FeedBack',
    html: [
      `<div style='font-size:16px; color:#111;'>`,
      `<p>Tipo do Feedback: ${type}</p>`,
      `<p>Tipo do comments: ${comments}</p>`,
      `</div>`
    ].join('\n')
  })

  return res.status(201).json(feedback)
})

app.listen(3333, () => {
  console.log('HTTP server running!')
})