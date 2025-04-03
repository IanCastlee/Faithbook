import express from "express";
import dotenv from "dotenv";
import uploadRoutes from "./routes/uploadRoutes.js";
dotenv.config();
const app = express();

import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import authRoutes from "./routes/auth.js";
import storiesRoutes from "./routes/stories.js";
import userPostsRoutes from "./routes/userPosts.js";
import relationshipRoutes from "./routes/relationships.js";
import authUserVerseRoutes from "./routes/userVerse.js";
import authAllVerseRoutes from "./routes/allVerses.js";
import authAFrRoutes from "./routes/friends.js";
import authMessages from "./routes/messages.js";

import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";

// Define allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://faithbook-git-main-eyhan.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

//// Multer configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../client/public/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   const file = req.file;
//   res.status(200).json(file.filename);
// });

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/stories", storiesRoutes);
app.use("/api/userPosts", userPostsRoutes);
app.use("/api/relationships", relationshipRoutes);
app.use("/api/userVerse", authUserVerseRoutes);
app.use("/api/allVerse", authAllVerseRoutes);
app.use("/api/friendReqs", authAFrRoutes);
app.use("/api/messages", authMessages);

app.use("/api/", uploadRoutes);

const server = app.listen(8800, () => {
  console.log("API working on port 8800");
});
