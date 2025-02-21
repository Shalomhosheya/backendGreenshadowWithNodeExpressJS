import { prisma } from "../database/prisma-database";
import { Staff } from "../model/staff";
import { addStaff, deleteStaff, updateStaff, viewAllStaff } from "../services/staffService";
import e from "express";

const router = e.Router();

router.post("/addStaff", async (req: e.Request, res: e.Response) => {
     const staff: Staff = req.body;
        try{
            const addedstaff = await addStaff(staff);
            res.status(200).json(addedstaff);
        }catch(err){
            console.log("Error while adding staff", err);
            res.status(400).send("Error while adding staff");
        }
})