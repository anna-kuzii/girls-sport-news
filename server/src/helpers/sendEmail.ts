import * as nodemailer from 'nodemailer';

import { IEmailsObj } from '../data/data.model';

export default async (emailTempate: () => IEmailsObj, userEmail: string): Promise<void> => {
  const { subject, html } = emailTempate();
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSPORT,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: userEmail,
    subject,
    html,
  });
};
