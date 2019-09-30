import registrationMail from '../../data/emails/registration';

const nodemailer = require('nodemailer');

async function main() {
  nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "girls.sport.news",
      pass: "SportNews@)19"
    }
  });

  let info = await transporter.sendMail({
    from: 'girls.sport.news',
    to: 'akuzij@gmail.com',
    subject: 'Success registration',
    html: registrationMail
  });

  console.log('Message sent: %s', info.messageId);
}

main().catch(console.error);
