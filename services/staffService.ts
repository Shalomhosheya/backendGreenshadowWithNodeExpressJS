import { prisma } from "../database/prisma-database";
import { Staff } from "../model/staff";

export async function viewAllStaff() {
    try {
        return await prisma.staff.findMany();
    } catch (error) {
        console.error("Error while retrieving all staff", error);
        throw error;
    }
}

export async function addStaff(staff: Staff) {
    try {
        const addedStaff = await prisma.staff.create({
            data: {
                staffID: staff.staffID,
                firstName: staff.firstname,  
                lastName: staff.lastname,    
                designation: staff.designation,
                gender: staff.gender,
                address1: staff.address,    
                address2: staff.address2 ?? null,
                address3: staff.adddress3 ?? null,  
                address4: staff.address4 ?? null,
                address5: staff.address5 ?? null,
                joindate: new Date(staff.JoindDate), 
                DOB: new Date(staff.DOB),         
                contactnum: staff.contact,     
                role: staff.role,
                email: staff.email,
                field: staff.field,
            }
        });
        return addedStaff;
    } catch (error) {
        console.error("Error while adding staff", error);
        throw error;
    }
}

// 📌 Update staff
export async function updateStaff(staff: Staff,staffID: string) {
    try {
        const updatedStaff = await prisma.staff.update({
            where: {
                staffID: staff.staffID,
            },
            data: {
                firstName: staff.firstname,  
                lastName: staff.lastname,    
                designation: staff.designation,
                gender: staff.gender,
                address1: staff.address,    
                address2: staff.address2 ?? null,
                address3: staff.adddress3 ?? null,  
                address4: staff.address4 ?? null,
                address5: staff.address5 ?? null,
                joindate: new Date(staff.JoindDate), 
                DOB: new Date(staff.DOB),         
                contactnum: staff.contact,     
                role: staff.role,
                email: staff.email,
                field: staff.field,
            },
        });
        return updatedStaff;
    } catch (error) {
        console.error("Error while updating staff", error);
        throw error;
    }
}

export async function deleteStaff(staffID: string) {
    try {
        return await prisma.staff.delete({
            where: { staffID }
        });
    } catch (error) {
        console.error("Error while deleting staff", error);
        throw error;
    }
}
