const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

function sendMail(user, req) {
  const url = req.headers.origin
  const id = user._id;
  const token = btoa(id);
  const transporter = nodemailer.createTransport({
    host: 'smtp.transip.email',
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.MAIL_ADRESS}`,
      pass: `${process.env.MAIL_PASSWORD}`,
    },
  });
  const mailOptions = {
    from: `CareForYou <${process.env.MAIL_ADRESS}>`,
    to: `${user.email}`,
    subject: 'Activate account',
    html: `
            <h2>Klik op de link om je account te activeren</h2>
            <a href="${url}/account/verify/${token}">Account activeren</a>`,
  };

  transporter.sendMail(mailOptions);
}

module.exports = sendMail;