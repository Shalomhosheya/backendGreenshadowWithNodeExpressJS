import { prisma } from "../database/prisma-database";
import { Staff } from "../model/staff";


export async function viewAllStaff() {
    try {
        const staff = await prisma.staff.findMany();
        return staff;
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
                address2: staff.address2,
                address3: staff.adddress3,
                address4: staff.address4,
                address5: staff.address5,
                joindate: staff.JoindDate,
                DOB: staff.DOB,
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

export async function updateStaff(staff: Staff) {

    try {
        const updatedStaff = await prisma.staff.update({
            where: {
                staffID: staff.staffID,
            },
            data: {
                staffID: staff.staffID,
                firstName: staff.firstname,
                lastName: staff.lastname,
                designation: staff.designation,
                gender: staff.gender,
                address1: staff.address,
                address2: staff.address2,
                address3: staff.adddress3,
                address4: staff.address4,
                address5: staff.address5,
                joindate: staff.JoindDate,
                DOB: staff.DOB,
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

export async function deleteStaff(staff: Staff) {
    try {
        const deletedStaff = await prisma.staff.delete({
            where: {
                staffID: staff.staffID,
            },
        });
        return deletedStaff;
    } catch (error) {
        console.error("Error while deleting staff", error);
        throw error;
    }
}