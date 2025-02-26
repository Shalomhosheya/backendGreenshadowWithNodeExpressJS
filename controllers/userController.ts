import { prisma } from "../database/prisma-database";
import { User } from '../model/user';
import { addUser, deleteUser, updateUser, viewAllUsers } from "../services/userService";
import express from "express";
 const router = express.Router();


 router.post('/addUser', async (req, res) => {
    const user: User = req.body;
    console.log("Received user : ", user);
    try {
        const addedUser = await addUser(user);
        res.status(200).json(addedUser);
    } catch (err) {
        console.log("Error during user adding : ", err)
        res.status(400).send("Error during user");
    }
});

router.put('/updateUser/:userID', async (req, res) => {
    console.log("Received Update User : ", req.body);
    const userID: string = req.params.userID;
    const user: User = req.body;
    try {
        const updatedUser = await updateUser(userID, user);
        res.status(200).json(updatedUser);
    } catch (err) {
        console.log("Error during user updating : ", err)
        res.status(400).send("Error during user");
    }
    });

router.delete('/deleteUser/:userID', async (req, res) => {
    const userID: string = req.params.userID;
    try {
        const deletedUser = await deleteUser(userID);
        res.status(200).json(deletedUser);
    } catch (err) {
        console.log("Error during user deleting : ", err)
        res.status(400).send("Error during user");
    }
    });

router.get('/viewAllUsers', async (req, res) => {
    try {
        const allUsers = await viewAllUsers();
        res.status(200).json(allUsers);
    } catch (err) {
        console.log("Error during user viewing : ", err)
        res.status(400).send("Error during user");
    }
})

export default router;