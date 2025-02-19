import { vehicle } from "../model/vehicle";
import { extractImages } from "../util/Apputil";
import {getall  } from "../services/vehicleService";
import e from "express";

const router = e.Router();


router.get('/viewAllVehicle', async (req, res) => {
    console.log("All crop details are retrieved");
    try {
        const vehicle = await getall();
        res.json(vehicle)
    } catch (err) {
        console.log("error during getting crops")
    }
})

export default router;