import { prisma } from "../database/prisma-database";
import { User } from "../model/user";

export async function addUser(user: User) {
    try {
        const newUser = await prisma.user.create({
            data: {
                userID: user.userID, // Ensure userID is a string
                firstName: user.firstname, // Fixed inconsistent naming
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                role: user.role
            }
        });
        console.log("User added successfully");
        console.log(newUser);
        return newUser;
    } catch (err) {
        console.log("Error adding user:", err);
        throw new Error("Failed to add user");
    }
}

export async function updateUser(userID: string, updatedUser: User) { // Changed userID type to string
    try {
        const updatedUserRecord = await prisma.user.update({
            where: { userID }, // userID should be a string
            data: {
                firstName: updatedUser.firstname, // Fixed inconsistent naming
                lastName: updatedUser.lastName,
                email: updatedUser.email,
                password: updatedUser.password, // Fixed inconsistent naming
                role: updatedUser.role
            }
        });
        console.log("User updated successfully");
        return updatedUserRecord;
    } catch (err) {
        console.log("Error updating user:", err);
        throw new Error("Failed to update user");
    }
}

export async function viewAllUsers() {
    try {
        const users = await prisma.user.findMany();
        console.log("Users retrieved successfully");
        return users;
    } catch (err) {
        console.log("Error retrieving users:", err);
        throw new Error("Failed to retrieve users");
    }
}

export async function deleteUser(staffID: string) { // Changed userID → staffID
    try {
        return await prisma.staff.delete({
            where: { staffID } // Staff model uses staffID, not userID
        });
    } catch (error) {
        console.error("Error while deleting staff", error);
        throw error;
    }
}
