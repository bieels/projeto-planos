const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtsecret = process.env.JWT_SECRET;

//Generate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtsecret, {
    expiresIn: "7d",
  });
};

//Register user and sign in
const register = async (req, res) => {
  res.send("registro");
};

module.exports = {
  register,
};
