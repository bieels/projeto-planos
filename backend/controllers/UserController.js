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
  const { name, email, password } = req.body;

  //Check if user exists
  const user = await User.findOne({ email });

  if (user) {
    res.status(422).json({ errors: ["Por favor, utilize outro email."] });
    return;
  }

  //Generate password hash
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  //Create  user
  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  //If user was created successfully, return the token
  if (!newUser) {
    res
      .status(422)
      .json({ errors: ["Houve um erro, tente novamente mais tarde."] });
    return;
  }
  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  });
};
//Sign user in
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // Check if user exists
  if (!user) {
    res.status(404).json({ errors: ["Usuário não encontrado!"] });
    return;
  }

  // Check if password matches
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(422).json({ errors: ["Senha inválida!"] });
    return;
  }

  // Return user with token
  res.status(200).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id),
  });
};


module.exports = {
  register,
  login,
};
