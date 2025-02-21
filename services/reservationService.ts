import { prisma } from "../database/prisma-database";
import { Reservation } from "../model/reservation";

export async function viewAllReservations() {
    try {
        return await prisma.reservation.findMany();
    } catch (error) {
        console.error("Error while retrieving all reservations", error);
        throw error;
    }
}

export async function addReservation(reservation: Reservation) {
    try {
        const addedReservation = await prisma.reservation.create({
            data: {
                reservationID: reservation.reservationID,
                date: new Date(reservation.date),
                response: reservation.response,
                reservationType: reservation.reservationtype,
                staffID: reservation.staffID,
                vehicleID: reservation.vehicleID,
            }
        });
        return addedReservation;
    } catch (error) {
        console.error("Error while adding reservation", error);
        throw error;
    }
}

export async function deleteReservation(reservationID: string) {
    try {
        const deletedReservation = await prisma.reservation.delete({
            where: {
                reservationID: reservationID,
            }
        });
        return deletedReservation;
    } catch (error) {
        console.error("Error while deleting reservation", error);
        throw error;
    }   

}

export async function updateReservation(reservation: Reservation, reservationID: string) {
    try {
        const updatedReservation = await prisma.reservation.update({
            where: {
                reservationID: reservation.reservationID,
            },
            data: {
                date: new Date(reservation.date),
                response: reservation.response,
                reservationType: reservation.reservationtype,
                staffID: reservation.staffID,
                vehicleID: reservation.vehicleID,
            }
        });
        return updatedReservation;
    } catch (error) {
        console.error("Error while updating reservation", error);
        throw error;
    }
}