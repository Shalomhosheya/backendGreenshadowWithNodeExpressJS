import express from "express";
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