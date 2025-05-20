require("dotenv").config(); // ✅ Load env variables first

const express = require("express");
const app = express();
const cors = require("cors");

const connectDb = require("./src/Db/config");
connectDb();

const userRoutes = require("./src/Routes/userRoutes.js");
const courseRoutes = require("./src/Routes/courseRoutes.js")

// Middleware
app.use(cors()); // 
app.use(express.json());

// API Routes
app.use("/api/auth", userRoutes);
app.use('/image',express.static('public/upload'));
app.use("/api/course", courseRoutes )


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
