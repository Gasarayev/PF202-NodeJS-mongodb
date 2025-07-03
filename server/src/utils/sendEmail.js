const nodemailer = require("nodemailer");
const { EMAIL_PASS, EMAIL_USER } = require("../config/config");

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: EMAIL_USER, 
    pass: EMAIL_PASS, 
  },
});

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const mailOptions = {
      from: EMAIL_USER,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendEmail;
