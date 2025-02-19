import { prisma } from "../database/prisma-database"; // Ensure prisma is correctly imported

export async function getAll() {
    try {
        const vehicles = await prisma.vehicle.findMany(); // Model names in Prisma are lowercase
        return vehicles;
    } catch (err) {
        console.error("Error getting vehicles:", err);
        return []; // Return an empty array in case of an error
    }
}
