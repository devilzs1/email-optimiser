// const formData = require('form-data');
// const Mailgun = require('mailgun.js');
// const mailgun = new Mailgun(formData);
// require("dotenv").config();

// const mg = mailgun.client({username: 'api', key: process.env.MG_API_PRIVATE_KEY || ''});
// mg.messages
//   .create("sandboxd815f39a094c45b7ad87a3689d79e01e.mailgun.org", {
//     from: "Excited User <mailgun@sandbox-123.mailgun.org>",
//     to: ["mazs272002@gmail.com"],
//     subject: "Hello",
//     text: "Testing some Mailgun awesomeness!",
//     html: "<h1>Testing some Mailgun awesomeness!</h1>",
//   })
//   .then((msg) => console.log(msg)) // logs response data
//   .catch((err) => console.log(err)); // logs any error

const mailgun = require("mailgun-js");
require("dotenv").config();
const DOMAIN = "sandboxd815f39a094c45b7ad87a3689d79e01e.mailgun.org";
const mg = mailgun({apiKey:process.env.MG_API_PRIVATE_KEY , domain: DOMAIN});
const data = {
  from: "Mailgun Sandbox <postmaster@sandboxd815f39a094c45b7ad87a3689d79e01e.mailgun.org>",
  to: "mazs272002@gmail.com",
  subject: "Hello",
  template: "Gift Voucher",
  "o:tracking-opens": "yes",
  "o:tracking-clicks": "yes",
  "h:X-Mailgun-Variables": { test: "test" },
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
// # Send an email using your active template with the above snippet
// # You can see a record of this email in your logs: https://app.mailgun.com/app/logs.