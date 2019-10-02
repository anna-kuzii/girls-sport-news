const nodemailer = require('nodemailer');

export default async function sendEmail(emailTempate) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSPORT
    }
  });

  await transporter.sendMail(emailTempate);
}

