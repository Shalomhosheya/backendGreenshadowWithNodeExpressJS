import express from "express";
import {Crop} from "../model/crop";
import { extractImages } from "../util/Apputil";
import { AddCrop } from "../services/cropService";
const router = express.Router();

router.post('/addCrop', async (req, res) => {
    const crop: Crop = req.body;
    crop.cropImage = extractImages(req)
    console.log("Received Crops : ", crop);
    try {
        const addedCrop = await AddCrop(crop);
        res.status(200).json(addedCrop);
    } catch (err) {
        console.log("Error during crop adding : ", err)
        res.status(400).send("Error during crop");
    }
});
export default router;