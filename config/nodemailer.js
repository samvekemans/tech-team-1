const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
});

const transporter2 = nodemailer.createTransport({
	host: "smtp.transip.email",
	port: 465,
	secure: true,
	auth: {
		user: "careforyou@stefanradouane.nl",
		pass: "Careforyou123",
	},
});

// Server:
//
// SSL: ingeschakeld
// Gebruikersnaam: je e-mailadres
// Wachtwoord: het wachtwoord dat je voor dit e-mailadres hebt ingesteld

var mailOptions = {
	from: "careforyou@stefanradouane.nl",
	to: "stefanradouane@ziggo.nl",
	subject: "Sending email",
	text: "testje",
};

transporter2.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log("email send" + info.response);
	}
});
