const axios = require("axios");

exports.sendEmail = async (req, res) => {
  try {
    const { from, to, subject, template, variables } = req.body;

    const mailgunApiKey = process.env.MAILGUN_API_KEY;
    const mailgunDomain = process.env.MAILGUN_DOMAIN;

    const response = await axios.post(
      `https://api.mailgun.net/v3/${mailgunDomain}/messages`,
      {
        from: `Your Company <mailgun@${mailgunDomain}>`,
        to: recipient,
        subject,
        template,
        "h:X-Mailgun-Variables": JSON.stringify(variables), // Optional: Pass variables for template
      },
      {
        auth: {
          username: "api",
          password: mailgunApiKey,
        },
      }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Email sent successfully",
        data: response.data,
      });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
};
