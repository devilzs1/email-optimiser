
const mailgun = require("mailgun-js");

require("dotenv").config();

const DOMAIN = process.env.MG_DOMAIN;
const mg = mailgun({ apiKey: process.env.MG_API_PRIVATE_KEY, domain: DOMAIN });

const data = {
  from: `Mailgun Sandbox <postmaster@{DOMAIN>`,
  to: "",
  subject: "Hello",
//   template: "Gift Voucher",
   html: "",
  "o:tracking-opens": "yes",
  "o:tracking-clicks": "yes",
  "h:X-Mailgun-Variables": { test: "test" },
};
mg.messages().send(data, function (error, body) {
  console.log(body);
});

// # Send an email using your active template with the above snippet
// # You can see a record of this email in your logs: https://app.mailgun.com/app/logs.
