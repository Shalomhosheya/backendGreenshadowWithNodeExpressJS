import {prisma} from "../database/prisma-database";
import { EquipmentDetail } from "../model/equipmentDetail";


export async function addEquipmentDetail(equipmentDetail: EquipmentDetail) {
    try {
        const newEquipmentDetail = await prisma.equipmentDetails.create({
            data: {
                equipDetailID: equipmentDetail.equipDetailID,
                data: equipmentDetail.data,
                response: equipmentDetail.response,
                equipID: equipmentDetail.equipID,
                staffID: equipmentDetail.staffID,
                fieldID: equipmentDetail.fieldID
            }
        });
        return newEquipmentDetail;
    }catch (error) {
            console.error("Error while adding equipment detail", error);
        throw error;
    }

}

export async function viewAllEquipmentDetail() {
    try {
        const equipmentDetails = await prisma.equipmentDetails.findMany();
        return equipmentDetails;
    }catch (error) {
            console.error("Error while viewing all equipment details", error);
        throw error;
    }
}

export async function updateEquipmentDetail(equipmentDetail: EquipmentDetail, equipmentID: string) {
     try {
        const updatedEquipmentDetail = await prisma.equipmentDetails.update({
            where: {
                equipDetailID: equipmentID
            },
            data: {
                data: equipmentDetail.data,
                response: equipmentDetail.response,
                equipID: equipmentDetail.equipID,
                staffID: equipmentDetail.staffID,
                fieldID: equipmentDetail.fieldID
            }
        });
        return updatedEquipmentDetail;
    }catch (error) {
            console.error("Error while updating equipment detail", error);
        throw error;
    }
}

export async function deleteEquipmentDetail(equipDetailID: string) {
    
    try {
        await prisma.equipmentDetails.delete({
            where: {
                equipDetailID: equipDetailID
            }
        });
    }catch (error) {
            console.error("Error while deleting equipment detail", error);
        throw error;
    }
}