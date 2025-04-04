// import express from "express";
// import multer from "multer";
// import { cloudinaryStorage } from "multer-storage-cloudinary";
// import cloudinary from "../cloudinaryConfig";

// const router = express.Router();

// const storage = new cloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "uploads", // You can adjust the folder name if needed
//     // format: "jpg",      // You can also remove this or change it if you want other formats
//   },
// });

// const upload = multer({ storage });

// // POST route for uploading images
// router.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "No file uploaded" });
//   }

//   // Return the Cloudinary URL of the uploaded image
//   res.json({ imageUrl: req.file.path });
// });

// export default router;
