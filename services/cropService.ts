import {Crop} from "../model/crop";
import {prisma} from "../database/prisma-database";

export async function AddCrop(crop:Crop){
    try {
        const cropSeason = String(crop.season);
        console.log("Image", crop.cropImage)
        const newCrop = await prisma.crop.create({
            data:{
                cropID:crop.cropID,
                cropName:crop.cropName,
                cropImage:crop.cropImage,
                scientificName:crop.scientificName,
                category:crop.category,
                season:cropSeason
            }
        })
        console.log("Crop Added : " , newCrop);
        return newCrop;
    }catch (err){
        console.log("Error during crop adding : ", err)
    }
}
export async function UpdateCrop(cropID: string, crop: Crop) {
    try {
        const existingCrop = await prisma.crop.findUnique({
            where: { cropID: cropID },
        });

        if (!existingCrop) {
            console.log(`Crop with cropCode: ${cropID} not found.`);
            return null;
        }

        const cropSeason = String(crop.season);
        const cropUpdate = await prisma.crop.update({
            where: { cropID: cropID },
            data: {
                cropName: crop.cropName,
                cropImage: crop.cropImage,
                scientificName: crop.scientificName,
                category: crop.category,
                season: cropSeason,
            },
        });

        console.log("Crop Updated ", cropUpdate);
        return cropUpdate;
    } catch (err) {
        console.error("Error during crop updating:", err);
    }
}
export async function DeleteCrop(cropID:string){
    try {
        await prisma.crop.delete({
            where:{cropID:cropID}
        })
    }catch (err){
        console.log("Error during customer deleting : ", err)
    }
}
export async function GetAllCrops(){
    try{
        return await prisma.crop.findMany();
    }catch (err){
        console.log("Error getting crops : ",err)
    }
}