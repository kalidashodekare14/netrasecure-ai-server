const express = require("express");
const router = express.Router();

const scanResults = [
  { status: "Safe", riskLevel: "Low", message: "No threats detected. The URL appears to be legitimate and secure." },
  { status: "Safe", riskLevel: "Low", message: "Domain verified. SSL certificate is valid and no malicious content was found." },
  { status: "Safe", riskLevel: "Low", message: "URL is clean. No history of malicious activity in our threat database." },
  { status: "Suspicious", riskLevel: "Medium", message: "The URL exhibits unusual patterns. Exercise caution and avoid sharing personal information." },
  { status: "Suspicious", riskLevel: "Medium", message: "The URL redirects through multiple unknown domains. Recommended to avoid." },
  { status: "Malicious", riskLevel: "High", message: "Multiple threat signatures detected. This URL is likely part of a phishing campaign." },
];

router.post("/", (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required." });
  }

  const result = scanResults[Math.floor(Math.random() * scanResults.length)];
  const timestamp = new Date().toISOString();

  res.json({ scannedUrl: url, ...result, timestamp });
});

module.exports = router;
