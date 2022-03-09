import express from "express";
import multer from "multer";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
