const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

function sendMail(email) {
	const transporter = nodemailer.createTransport({
		host: "smtp.transip.email",
		port: 465,
		secure: true,
		auth: {
			user: `${process.env.MAIL_ADRESS}`,
			pass: `${process.env.MAIL_PASSWORD}`,
		},
	});

	var mailOptions = {
		from: `CareForYou <${process.env.MAIL_ADRESS}>`,
		to: `${email}`,
		subject: "Sending email",
		text: "Je hebt geprobeerd een account aan te maken",
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("email send" + info.response);
		}
	});
}

module.exports = sendMail;
