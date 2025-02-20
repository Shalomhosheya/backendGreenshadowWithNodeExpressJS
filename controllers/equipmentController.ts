import express from "express";
import { equipment } from "../model/equipment";
import {AddEquipment}from "../services/equipmentService"
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