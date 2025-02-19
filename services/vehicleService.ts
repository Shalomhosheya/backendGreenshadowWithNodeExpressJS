import { prisma } from "../database/prisma-database"; // Ensure prisma is correctly imported
import { vehicle } from "../model/vehicle"; // Ensure prisma is correctly imported";

export async function getAll() {
    try {
        const vehicles = await prisma.vehicle.findMany(); // Model names in Prisma are lowercase
        return vehicles;
    } catch (err) {
        console.error("Error getting vehicles:", err);
        return []; // Return an empty array in case of an error
    }
}
export async function AddVehicle(vehicle: vehicle) {
    try {
        const newVehicle = await prisma.vehicle.create({
            data: {
                vehicleID:vehicle.vehicleID,
                vehicleCategory:vehicle.vehicleCategory,
                fueltype: vehicle.fueltype,
                remarks:vehicle.remarks,
                status:vehicle.status,
                licenseplate:vehicle.licenseplate
            },
        });
        
        console.log(newVehicle);
        return newVehicle    
    } catch (err) {
        console.error("Error adding vehicle: ", err);
    }
}
export async function DeleteVehicle(vehicleID:string){
 try{
    await prisma.vehicle.delete({
        where:{vehicleID:vehicleID}
    })
 }catch(err){
  console.error("Error in deleting: ",err)
 }
}
export async function updateVehicle(vehicleID:string){
    try{

    }catch(err){
     
    console.error("Error in updating: ",err)   
    }
}