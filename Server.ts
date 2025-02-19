// Import the express in typescript file
import express from 'express';
import CropController from './controllers/cropController';
import VehicleController from './controllers/vehicleController';
import fileupload from 'express-fileupload';

const app = express();

app.use(express.json());
app.use(fileupload());

app.use('/crop',CropController);
app.use('/vehicle',VehicleController);
app.use('/',(req,res, next)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers',"Origin,X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000,(err)=>{
    console.log("Server Running on port 3000");
})
app.use('/',(req,res)=>{
    res.status(404).send("Not Found")
})