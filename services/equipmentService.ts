import { prisma } from "../database/prisma-database";
import { equipment } from "../model/equipment";

export async function AddEquipment(equipment:equipment){

    try{
        await prisma.equipment.create({
            data:{
                equipmentID:equipment.equip_id,
                equipmentName:equipment.name,
                equipmenttype:equipment.type,
                equipmentStatus:equipment.status
            }
        });
        console.log("Equipment added successfully");

    }catch(err){
        console.log(err);
    }
}