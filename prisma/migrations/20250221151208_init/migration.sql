-- CreateTable
CREATE TABLE `Reservation` (
    `reservationID` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `response` VARCHAR(191) NOT NULL,
    `reservationType` VARCHAR(191) NOT NULL,
    `staffID` VARCHAR(191) NOT NULL,
    `vehicleID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`reservationID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_staffID_fkey` FOREIGN KEY (`staffID`) REFERENCES `Staff`(`staffID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_vehicleID_fkey` FOREIGN KEY (`vehicleID`) REFERENCES `Vehicle`(`vehicleID`) ON DELETE RESTRICT ON UPDATE CASCADE;
