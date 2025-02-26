 import { EquipmentDetail } from '../model/equipmentDetail';
 import { addEquipmentDetail, deleteEquipmentDetail, updateEquipmentDetail, viewAllEquipmentDetail } from '../services/equipmentDetailService';
 import express from 'express';
 
 const router = express.Router();

 router.post('/addEquipmentDetail', async (req, res) => {
     const equipmentDetail: EquipmentDetail = req.body;
     try {
         const addedEquipmentDetail = await addEquipmentDetail(equipmentDetail);
         res.
         status(200).json(addedEquipmentDetail);
         } catch (err) {
             console.log("Error during equipment detail adding : ", err)
             res.status(400).send("Error during equipment detail");
         }
         });

    router.get('/viewAllEquipmentDetail', async (req, res) => {
             try {
                 const equipmentDetails = await viewAllEquipmentDetail();
                 res.status(200).json(equipmentDetails);
             } catch (err) {
                 console.log("Error during viewing all equipment details : ", err)
                 res.status(400).send("Error during viewing all equipment details");
             }
         });

    router.put('/updateEquipmentDetail/:equipID', async (req, res) => {
        
         const equipmentDetail: EquipmentDetail = req.body;
         const equipID = req.params.equipID;
         try {
             const updatedEquipmentDetail = await updateEquipmentDetail(equipmentDetail, equipID);
             res.status(200).json(updatedEquipmentDetail);
         }
         catch (err) {
             console.log("Error during updating equipment detail : ", err)
             res.status(400).send("Error during updating equipment detail");
         }

    })


 export default router;