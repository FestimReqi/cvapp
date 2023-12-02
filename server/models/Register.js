const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  pwd: String,
});

const Signup = mongoose.model("Signup", RegisterSchema);

module.exports = Signup;
