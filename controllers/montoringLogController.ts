import { MonitoringLog } from '../model/monitoringLog';
import express from 'express';
import { AddMonitoringLog, viewAllMontoringlog, updateMonitoringLog,deleteMonitoringLog } from '../services/monitoringLogService';
const router = express.Router();


router.post('/addMonitoringLog', async (req: express.Request, res: express.Response) => {
    const monitoringLog: MonitoringLog = req.body;
    try {
        const addedMonitoringLog = await AddMonitoringLog(monitoringLog);
        res.status(200).json(addedMonitoringLog);
    } catch (error) {
        console.log("Error while adding monitoringLog", error);
        res.status(400).send("Error while adding monitoringLog");
    }
});

router.get('/viewAllMonitoringLog', async (req: express.Request, res: express.Response) => {
    try {
        const monitoringLog = await viewAllMontoringlog();
        res.status(200).json(monitoringLog);
    } catch (err) {
        console.log("Error while retrieving all monitoringLog", err);
        res.status(400).send("Error while retrieving all monitoringLog");
    }
    });

router.put('/updateMonitoringLog/:id', async (req: express.Request, res: express.Response) => {
    const monitoringLogId = req.params.id;
    const monitoringLog: MonitoringLog = req.body;
    try {
        const updatedMonitoringLog = await updateMonitoringLog(monitoringLogId, monitoringLog);
        res.status(200).json(updatedMonitoringLog);
    } catch (error) {
        console.log("Error while updating monitoringLog", error);
        res.status(400).send("Error while updating monitoringLog");
        
    }
    })

router.delete('/deleteMonitoringLog/:id', async (req: express.Request, res: express.Response) => {
        const monitoringLogId = req.params.id;
        try {
            const deletedMonitoringLog = await deleteMonitoringLog(monitoringLogId);
            res.status(200).json(deletedMonitoringLog);
        } catch (error) {
            console.log("Error while deleting monitoringLog", error);
            res.status(400).send("Error while deleting monitoringLog");
        }
    });

export default router;