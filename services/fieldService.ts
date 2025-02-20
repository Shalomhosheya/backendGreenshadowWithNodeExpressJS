import { prisma } from "../database/prisma-database";
import { Field } from "../model/field";
import { Buffer } from "buffer";

// Function to view all fields
export async function viewAllFields() {
    try {
        const fields = await prisma.field.findMany();
        return fields;
    } catch (error) {
        console.error("Error while retrieving all fields", error);
        throw error;
    }
}

export async function addField(field: Field) {
    try {
        // Ensure that pic1 and pic2 are strings before converting them to Buffer
        const pic1Buffer = typeof field.pic1 === "string" ? Buffer.from(field.pic1, "base64") : undefined;
        const pic2Buffer = typeof field.pic2 === "string" ? Buffer.from(field.pic2, "base64") : undefined;

        const addedField = await prisma.field.create({
            data: {
                fieldID: field.fieldID,
                fieldName: field.fieldName,
                fieldLocation: field.fieldLocation,
                fieldSize: field.fieldSize,
                fieldStaff: field.staff,
                pic1: pic1Buffer,
                pic2: pic2Buffer,
            }
        });

        return addedField;
    } catch (error) {
        console.error("Error while adding field", error);
        throw error;
    }
}


export async function updateField(field: Field) {
    
}
export async function deleteField(fieldID: string) {
    try {
        await prisma.field.delete({
            where: {
                fieldID: fieldID
            }
        });
    } catch (error) {
        console.error("Error while deleting field", error);
        throw error;
    }
}