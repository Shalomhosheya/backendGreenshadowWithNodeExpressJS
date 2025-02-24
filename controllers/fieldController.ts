import e from "express";
import {Field}from "../model/field";
import { addField, deleteField, updateField, viewAllFields } from "../services/fieldService";
import { log } from "console";

const router = e.Router();

router.get("/viewAllFields", async (req: e.Request, res: e.Response) => {
    try{
        const fields = await viewAllFields();
        res.status(200).json(fields);
    }catch(err){
        console.log("Error while retrieving all fields", err);
        res.status(400).send("Error while retrieving all fields");
    }
})
router.post("/addField", async (req: e.Request, res: e.Response) => {
     const field: Field = req.body;
        try{
            const addedField = await addField(field);
            res.status(200).json(addedField);
        }catch(err){
            console.log("Error while adding field", err);
            res.status(400).send("Error while adding field");
        }
})
router.put("/updateField", async (req: e.Request, res: e.Response) => {
 
    const field: Field = req.body;
        try{
            const updatedField = await updateField(field);
            res.status(200).json(updatedField);
        }catch(err){
            console.log("Error while updating field", err);
            res.status(400).send("Error while updating field");
        }
})
router.delete("/deleteField", async (req: e.Request, res: e.Response) => {
    
    const fieldID = req.body.fieldID;
        try{
            const deletedField = await deleteField(fieldID);
            res.status(200).json(deletedField);
        }catch(err){
            console.log("Error while deleting field", err);
            res.status(400).send("Error while deleting field");
        }
})

export default router;