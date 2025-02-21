import { Reservation } from "../model/reservation";
import { addReservation, deleteReservation, updateReservation, viewAllReservations } from "../services/reservationService";
import e from "express";

const router = e.Router();

router.post("/addReservation", async (req: e.Request, res: e.Response) => {
    const reservation: Reservation = req.body;
    try{
        const addedReservation = await addReservation(reservation);
        res.status(200).json(addedReservation);
    }catch(err){
        console.log("Error while adding reservation", err);
        res.status(400).send("Error while adding reservation");
    }
})

router.get("/viewAllReservations", async (req: e.Request, res: e.Response) => {
    try{
        const reservations = await viewAllReservations();
        res.status(200).json(reservations);
    }catch(err){
        console.log("Error while retrieving all reservations", err);
        res.status(400).send("Error while retrieving all reservations");
    }
})

router.put("/updateReservation/:reservationID", async (req: e.Request, res: e.Response) => {
    try{
        const reservation: Reservation = req.body;
        const reservationID: string = req.params.reservationID;
        const updatedReservation = await updateReservation(reservation, reservationID);
        res.status(200).json(updatedReservation);
    }catch(err){
        console.log("Error while updating reservation", err);
        res.status(400).send("Error while updating reservation");
    }

})

router.delete("/deleteReservation/:reservationID", async (req: e.Request, res: e.Response) => {
    const reservationID: string = req.params.reservationID;
    try{
        const deletedReservation = await deleteReservation(reservationID);
        res.status(200).json(deletedReservation);
    }catch(err){
        console.log("Error while deleting reservation", err);
        res.status(400).send("Error while deleting reservation");
    }
})


export default router;