const Campaign = require('../models/campaigns');
const catchAsync = require("../utils/catchAsync");
const DomPurify = require("dompurify");
const mailgun = require("mailgun-js");

require("dotenv").config();

exports.createCampaign = catchAsync( async (req,res,next) => {
  const {
    campaign_name,
    campaign_description,
    //  from,
    to,
    subject,
    template,
  } = req.body;
  const htmlPurified = DomPurify(template.html);
  const design = template.design;
  const recipients = to.split(",").map((email) => email.trim());

  const DOMAIN = process.env.MG_DOMAIN;
  const mg = mailgun({ apiKey: process.env.MG_API_PRIVATE_KEY,
    domain: DOMAIN,
  });
  const from = `Mailgun Sandbox <postmaster@${DOMAIN}`;


  const campaign = new Campaign(
    campaign_name,
    campaign_description,
    from,
    recipients,
    subject,
    htmlPurified,
    design
  );
  await campaign.save();

  const data = {
    from: from,
    to: recipients,
    subject: subject,
    html: htmlPurified,
    "o:tracking-opens": "yes",
    "o:tracking-clicks": "yes",
    "h:X-Mailgun-Variables": { test: "test" },
  };

  mg.messages()
    .send(data)
    .then((body) => {
      console.log(body);
      res
        .status(200)
        .json({ status: "success", message: "Campaign created successfully!" });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });

  // # Send an email using your active template with the above snippet
  // # You can see a record of this email in your logs: https://app.mailgun.com/app/logs.
})

exports.getCampaign = catchAsync( async (req,res,next) => {
  const all_campaigns = await Campaign.find();

  res.status(200).json({
    status: "sucess",
    data: all_campaigns,
  })
})
