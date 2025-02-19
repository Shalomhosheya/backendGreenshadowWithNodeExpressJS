import express from "express";
import {Crop} from "../model/crop";
import { extractImages } from "../util/Apputil";
import { AddCrop,UpdateCrop,DeleteCrop,GetAllCrops } from "../services/cropService";
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
router.put('/updateCrop/:cropID', async (req, res) => {
    console.log("Received Update Crop : ", req.body);
    const cropCode: string = req.params.cropID;
    const crop: Crop = req.body;

    try {
        await UpdateCrop(cropCode, crop);
        res.status(200).send("Crop Updated");
    } catch (err) {
        console.log("Error during crop updating : ", err);
        res.status(400).send("Error during Crop");
    }
})

router.delete('/deleteCrop/:cropID', async (req, res) => {
    console.log("Received Deleted crop code");
    const cropCode: string = String(req.params.cropID);
    try {
        await DeleteCrop(cropCode);
        res.status(200).send("Crop Deleted")
    } catch (err) {
        console.log("Error during deleting crop :", err);
        res.status(400).send("Error during crop");
    }
})


router.get('/viewAllCrop', async (req, res) => {
    console.log("All crop details are retrieved");
    try {
        const crops = await GetAllCrops();
        res.json(crops)
    } catch (err) {
        console.log("error during getting crops")
    }
})
export default router;