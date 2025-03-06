const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chat");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Ensure routes are used correctly
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
