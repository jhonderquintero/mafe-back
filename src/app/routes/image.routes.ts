import express from "express";
import { imageController } from "../controllers/image.controller";

export const imageRoutes = express.Router();

imageRoutes.post('/upload', imageController.uploadImage);
