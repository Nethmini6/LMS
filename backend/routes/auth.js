const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log('Received login:', email, password);

  if(email === 'admin@gmail.com' && password === 'admin123') {
    return res.status(200).json({
      messagege: 'Login successful',
      user: { email} });
  } else {
    return res.status(401).json({ message: 'Login Faied'});
  
  }
});

module.exports = router;
