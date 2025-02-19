-- CreateTable
CREATE TABLE `Vehicle` (
    `vehicleID` VARCHAR(191) NOT NULL,
    `vehicleCategory` VARCHAR(191) NOT NULL,
    `fueltype` VARCHAR(191) NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `licenseplate` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`vehicleID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
