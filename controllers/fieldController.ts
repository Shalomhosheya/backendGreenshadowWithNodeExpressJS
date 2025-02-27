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
router.post('/addField', async (req, res) => {
    const field = req.body;
    console.log("Received field : ", field);
    try {
        const addedCrop = await addField(field);
        res.status(200).json(addedCrop);
    } catch (err) {
        console.log("Error during field adding : ", err)
        res.status(400).send("Error during field");
    }
});
router.put("/updateField/:fieldID", async (req: e.Request, res: e.Response) => {
 
    const field: Field = req.body;
    const fieldID: string = req.params.fieldID;
        try{
            const updatedField = await updateField(field, fieldID);
            res.status(200).json(updatedField);
        }catch(err){
            console.log("Error while updating field", err);
            res.status(400).send("Error while updating field");
        }
})
router.delete("/deleteField/:fieldID", async (req: e.Request, res: e.Response) => {
    
    const fieldID = req.params.fieldID;
    console.log("Received field ID : ", fieldID);
        try{
            const deletedField = await deleteField(fieldID);
            res.status(200).json(deletedField);
        }catch(err){
            console.log("Error while deleting field", err);
            res.status(400).send("Error while deleting field");
        }
})

export default router;