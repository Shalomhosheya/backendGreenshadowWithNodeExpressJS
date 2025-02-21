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

}

export async function updateStaff(staff: Staff) {

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