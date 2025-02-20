import { prisma } from "../database/prisma-database";
import { equipment } from "../model/equipment";

export async function AddEquipment(equipment: equipment) {
    try {
        const newEquipment = await prisma.equipment.create({
            data: {
                equipID: equipment.equip_id,
                name: equipment.name,
                type: equipment.type,
                status: equipment.status
            }
        });
        console.log("Equipment added successfully");
        console.log(newEquipment);
        return newEquipment;
    } catch (err) {
        console.log("Error adding equipment:", err);
        throw new Error("Failed to add equipment");
    }
}

export async function DeleteEquipment(equip_id: string) {
    try {
        await prisma.equipment.delete({
            where: { equipID: equip_id }
        });
        console.log("Equipment deleted successfully");
        return { message: "Equipment deleted successfully" };
    } catch (err) {
        console.log("Error deleting equipment:", err);
        throw new Error("Failed to delete equipment");
    }
}

// Update Equipment
export async function UpdateEquipment(equip_id: string, updatedData: Partial<equipment>) {
    try {
        const updatedEquipment = await prisma.equipment.update({
            where: { equipID: equip_id },
            data: updatedData
        });
        console.log("Equipment updated successfully");
        return updatedEquipment;
    } catch (err) {
        console.log("Error updating equipment:", err);
        throw new Error("Failed to update equipment");
    }
}

export async function GetEquipmentById(equip_id: string) {
    try {
        const equipment = await prisma.equipment.findUnique({
            where: { equipID: equip_id }
        });
        if (!equipment) {
            throw new Error("Equipment not found");
        }
        return equipment;
    } catch (err) {
        console.log("Error fetching equipment by ID:", err);
        throw new Error("Failed to fetch equipment by ID");
    }
}

export async function GetAllEquipment() {
    try {
        const equipmentList = await prisma.equipment.findMany();
        return equipmentList;
    } catch (err) {
        console.log("Error fetching all equipment:", err);
        throw new Error("Failed to fetch all equipment");
    }
}
