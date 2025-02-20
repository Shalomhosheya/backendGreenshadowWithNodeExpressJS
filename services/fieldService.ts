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

// Function to add a new field
export async function addField(field: Field) {
    try {
        // Convert base64 string to Buffer before storing
        const pic1Buffer = field.pic1 ? Buffer.from(field.pic1, "base64") : undefined;
        const pic2Buffer = field.pic2 ? Buffer.from(field.pic2, "base64") : undefined;

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