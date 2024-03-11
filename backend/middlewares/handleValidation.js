const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extratedErrors = [];

  errors.array().map((err) => extratedErrors.push(err.msg));

  return res.status(422).json({
    errors: extratedErrors,
  });
};

module.exports = validate;
