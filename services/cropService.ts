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