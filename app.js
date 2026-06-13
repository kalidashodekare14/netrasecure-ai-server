const express = require("express");
const cors = require("cors");

const contactRouter = require("./routes/contact");
const scanUrlRouter = require("./routes/scanUrl");
const chatRouter = require("./routes/chat");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/contact", contactRouter);
app.use("/scan-url", scanUrlRouter);
app.use("/chat", chatRouter);

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ error: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
