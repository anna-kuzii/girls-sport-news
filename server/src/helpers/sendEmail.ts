import nodemailer from 'nodemailer';
import appConfig from '../configs/app.config';
import { IEmailsObj } from '../data/data.model';

export default async (emailTempate: () => IEmailsObj, userEmail: string): Promise<void> => {
  const { subject, html } = emailTempate();
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: appConfig.EMAIL,
      pass: appConfig.PASSPORT,
    },
  });

  await transporter.sendMail({
    from: appConfig.EMAIL,
    to: userEmail,
    subject,
    html,
  });
};
