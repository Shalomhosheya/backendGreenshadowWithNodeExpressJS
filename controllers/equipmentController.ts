import express from "express";
import { equipment } from "../model/equipment";
import {AddEquipment,DeleteEquipment,UpdateEquipment,GetAllEquipment}from "../services/equipmentService"
import { extractImages } from "../util/Apputil";
import e from "express";


const router = express.Router();

router.post('/addEquipment', async (req, res) => {
    const equipment: equipment = req.body;
    console.log("Received equipment : ", equipment);
    try {
        const addedequipment = await AddEquipment(equipment);
        res.status(200).json(addedequipment);
    } catch (err) {
        console.log("Error during equipment adding : ", err)
        res.status(400).send("Error during equipment");
    }
});

router.delete('/deleteEquipment/:equip_id',async(req,res)=>{
    console.log("Received Deleted equipment");
        const equipmentid: string = String(req.params.equip_id);
        try {
            await DeleteEquipment(equipmentid);
            res.status(200).send("equipment Deleted")
        } catch (err) {
            console.log("Error during deleting equipment :", err);
            res.status(400).send("Error during equipment");
        }
})
router.put('/updateEquipment/:equip_id',async(req,res)=>{
    console.log("updated equipment");
    const equip_id:string = String(req.params.equip_id);
    const equipment: equipment = req.body;
  try{ 
    const updatedEquipment = await UpdateEquipment(equip_id,equipment);
    res.status(200).json(updatedEquipment); 

  }catch(err){
    console.log(err);
  }

})
router.get('/getEquipment',async(req,res)=>{
    console.log("get equipment");
    try{
        const equipment = await GetAllEquipment();
        res.status(200).json(equipment);
    }catch(err){
        console.log(err);
    }
})

export default router;