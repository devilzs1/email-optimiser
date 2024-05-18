const Templates = require("../models/templates");
const catchAsync = require("../utils/catchAsync");
const DomPurify = require("dom-purify");

require("dotenv").config();

exports.saveTemplate = catchAsync(async (req, res, next) => {

  const { template } = req.body;

  const htmlPurified = DOMPurify.sanitize(template.html);
  const design = template.design;

  const newTemplate = new Template({
    name: template.name,
    html: htmlPurified,
    design: design,
    saved_name: template.name,
    saved: true,
  });

  await newTemplate.save();

  res.status(200).json({
    status: "success",
    // data: newTemplate,
  });

});

exports.getTemplates = catchAsync(async (req, res, next) => {
  const all_templates = await Templates.find();

  res.status(200).json({
    status: "sucess",
    data: all_templates,
  });
});
