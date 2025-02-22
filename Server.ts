import express from 'express';
import CropController from './controllers/cropController';
import VehicleController from './controllers/vehicleController';
import EquipmentController from './controllers/equipmentController';
import FieldController from './controllers/fieldController';
import StaffController from './controllers/staffController';
import ReservationController from './controllers/reservationcontroller';
import fileupload from 'express-fileupload';
import cors from 'cors'; // Import CORS properly

const app = express();

// Enable CORS for all origins (Modify as needed)
app.use(cors({
    origin: "http://localhost:5173", // Allow frontend origin
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept"
}));

// Middleware
app.use(express.json());
app.use(fileupload());

// Routes
app.use('/crop', CropController);
app.use('/vehicle', VehicleController);
app.use('/equipment', EquipmentController);
app.use('/field', FieldController);
app.use('/staff', StaffController);
app.use('/reservation', ReservationController);

// Handle 404
app.use('*', (req, res) => {
    res.status(404).send("Not Found");
});

// Start server
app.listen(3000, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log("Server Running on port 3000");
    }
});
