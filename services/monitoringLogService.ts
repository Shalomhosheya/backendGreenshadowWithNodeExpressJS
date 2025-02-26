import { MonitoringLog } from '../model/monitoringLog';
import { prisma } from "../database/prisma-database";
import { buffer } from 'stream/consumers';


export async function AddMonitoringLog(monitoringLog: MonitoringLog) {

const newMonitoringLog = await prisma.montoringLog.create({
        data: {
            logID: monitoringLog.logID,
            log_Date: monitoringLog.log_date,
            observation: monitoringLog.obervations,
            observed_image: monitoringLog.image,
            staffID: monitoringLog.StaffID,
            fieldID: monitoringLog.FieldID,
            cropID: monitoringLog.CropID
        }
    });
    return newMonitoringLog;
}



export async function viewAllMontoringlog() {
    
    const monitoringLog = await prisma.montoringLog.findMany({
        include: {
            staff: true,
            field: true,
            crop: true
        }
    });
    return monitoringLog;
}

export async function updateMonitoringLog(monitoringLog: MonitoringLog, monitoringLogID: string) {
     const updatedMonitoringLog = await prisma.montoringLog.update({
        where: {
            logID: monitoringLogID
        },
        data: {
            log_Date: monitoringLog.log_date,
            observation: monitoringLog.obervations,
            observed_image: monitoringLog.image,
            staffID: monitoringLog.StaffID,
            fieldID: monitoringLog.FieldID,
            cropID: monitoringLog.CropID
        }
    });
    return updatedMonitoringLog;
}

export async function deleteMonitoringLog(monitoringLogID: string) {
    const deletedMonitoringLog = await prisma.montoringLog.delete({
        where: {
            logID: monitoringLogID
        }
    });
    return deletedMonitoringLog;
}
