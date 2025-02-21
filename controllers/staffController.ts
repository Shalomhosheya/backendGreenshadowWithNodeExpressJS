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

router.get("/viewAllStaff", async (req: e.Request, res: e.Response) => {
    try{
        const staff = await viewAllStaff();
        res.status(200).json(staff);
    }catch(err){
        console.log("Error while retrieving all staff", err);
        res.status(400).send("Error while retrieving all staff");
    }

})

router.put("/updateStaff/:staffID", async (req: e.Request, res: e.Response) => {
  
    
    const staffID1: string = req.params.staffID;
    const staff = req.body;
        try{
            const updatedstaff = await updateStaff(staff,staffID1);
            res.status(200).json(updatedstaff);
        }catch(err){
            console.log("Error while updating staff", err);
            res.status(400).send("Error while updating staff");
        }
    
})

router.delete("/deleteStaff/:staffID", async (req: e.Request, res: e.Response) => {

    const staff = req.body;
    const staffID: string = req.params.staffID;
    
        try{
            const deletedstaff = await deleteStaff(staffID);
            res.status(200).json(deletedstaff);
        }catch(err){
            console.log("Error while deleting staff", err);
            res.status(400).send("Error while deleting staff");
        }
})

export default router;