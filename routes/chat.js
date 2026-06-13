const express = require("express");
const router = express.Router();

const keywordReplies = [
  { keywords: ["phishing", "email", "link", "click"], reply: "Phishing attempts often arrive via email with urgent language and suspicious links. Always verify the sender and hover over links before clicking. Would you like me to help scan a specific email or URL?" },
  { keywords: ["malware", "virus", "trojan", "ransomware"], reply: "Malware infections can occur through downloads, email attachments, or compromised websites. I recommend running a full system scan and avoiding untrusted sources. Need help checking a specific file?" },
  { keywords: ["password", "login", "account", "2fa", "mfa"], reply: "Strong passwords are your first line of defense. Use a unique password for each account, enable two-factor authentication where possible, and consider a password manager. Would you like security recommendations for your accounts?" },
  { keywords: ["scan", "url", "website", "site"], reply: "URL scanning checks for phishing, malware, and suspicious activity. Submit the URL to our scanner and I'll analyze it against our threat database. You can try the URL scanner above." },
  { keywords: ["deepfake", "fake", "manipulated", "media"], reply: "Deepfake detection uses AI to analyze media for signs of manipulation. Our models check for inconsistencies in lighting, audio, and facial features. Would you like to submit media for analysis?" },
  { keywords: ["network", "firewall", "port", "vpn"], reply: "Network security starts with a properly configured firewall, closed unused ports, and a reliable VPN for remote access. I can help you assess your network setup." },
  { keywords: ["safe", "secure", "protected", "clean"], reply: "It looks like your system is in good shape. Keep up with regular updates, use strong passwords, and run periodic scans for continued protection." },
  { keywords: ["chatbot", "ai", "assistant", "help"], reply: "I'm your AI security assistant! I can help with threat analysis, URL scanning, security best practices, and more. What would you like to know about cybersecurity?" },
  { keywords: ["threat", "attack", "breach", "vulnerability"], reply: "Threats evolve constantly. Our AI monitors global threat intelligence to detect and neutralize attacks in real time. Would you like to run a security assessment?" },
  { keywords: ["update", "upgrade", "patch", "version"], reply: "Keeping software updated is critical. Security patches fix known vulnerabilities that attackers exploit. Enable automatic updates where possible." },
];

const defaultReply = "I'm here to help with your cybersecurity needs. You can ask me about phishing, malware, password security, URL scanning, deepfake detection, network security, and more. What would you like to know?";

router.post("/", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "Please provide a message." });
  }

  const lower = message.toLowerCase();
  let reply = defaultReply;

  for (const entry of keywordReplies) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      reply = entry.reply;
      break;
    }
  }

  res.json({ reply });
});

module.exports = router;
