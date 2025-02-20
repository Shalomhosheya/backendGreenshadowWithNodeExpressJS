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