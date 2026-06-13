const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { fullName, name, email, subject, message } = req.body;
  const finalName = fullName || name;

  if (!finalName || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  console.log(`Contact inquiry from ${finalName} (${email}): ${subject}`);

  res.json({ success: true, message: "Message received" });
});

module.exports = router;
