const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "amel.ensi@gmail.com",
    pass: "vjxnvdzivhjqofqx",
  },
});

var mailOptions = {
  from: "amel.ensi@gmail.com",
  to: "amel.ensi@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + data.response);
  }
});