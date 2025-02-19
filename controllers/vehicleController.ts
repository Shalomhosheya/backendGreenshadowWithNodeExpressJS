import { vehicle } from "../model/vehicle";
import { extractImages } from "../util/Apputil";
import {getAll ,AddVehicle,DeleteVehicle } from "../services/vehicleService";
import e from "express";

const router = e.Router();


router.get('/viewAllVehicle', async (req, res) => {
    console.log("All vehicle details are retrieved");
    try {
        const vehicle = await getAll();
        res.json(vehicle)
    } catch (err) {
        console.log("error during getting vehicle")
    }
})
router.post('/addVehicle', async (req, res) => {
 const vehicle = req.body;
 console.log("receieved "+vehicle);
 try{
  const addVehicle = await AddVehicle(vehicle);
  res.status(200).json(addVehicle)
 }catch (err) {
  console.log(err);
  res.status(400).send("Failed to retrieve")
}
 
});

router.delete('/deleteVehicle/:vehicleID',async(req,res)=>{
  console.log("triggerd")
  const vehicleID = String(req.params.vehicleID);
    try {
        await DeleteVehicle(vehicleID);
        res.status(200).send("Vehicle Deleted")
    } catch (err) {
        console.log("Error during deleting Vehicle :", err);
        res.status(400).send("Error during Vehicle");
    }
});
export default router;