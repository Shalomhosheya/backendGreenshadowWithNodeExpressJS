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

export async function updateVehicle(vehicleID: string, vehicleData:vehicle ) {
    try {
        // Check if vehicle exists
        const existingVehicle = await prisma.vehicle.findUnique({
            where: { vehicleID: vehicleID }, // Ensure correct field name
        });

        if (!existingVehicle) {
            console.log(`Vehicle with ID: ${vehicleID} not found.`);
            return { error: "Vehicle not found" };
        }

        // Update vehicle
        const vehicleUpdate = await prisma.vehicle.update({
            where: { vehicleID: vehicleID }, // Ensure correct field name
            data: {
                vehicleCategory: vehicleData.vehicleCategory,
                fueltype: vehicleData.fueltype, // Ensure matching schema
                remarks: vehicleData.remarks,
                status: vehicleData.status,
                licenseplate: vehicleData.licenseplate?.toString(), // Ensure string type
            },
        });

        console.log("Vehicle Updated:", vehicleUpdate);
        return vehicleUpdate;
    } catch (err) {
        console.error("Error in updating:", err);
        return { error: "Error updating vehicle" };
    }
}
