-- CreateTable
CREATE TABLE `Crop` (
    `cropID` VARCHAR(191) NOT NULL,
    `cropName` VARCHAR(191) NOT NULL,
    `cropImage` LONGBLOB NOT NULL,
    `scientificName` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `season` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cropID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CREATE TABLE `vehicle` (
--     `vehicleID` VARCHAR(191) NOT NULL,
--     'vehicleCategory' VARCHAR(255) NOT NULL,
--     'fuelType'VARCHAR(255) NOT NULL,
--     `remarks`VARCHAR(255) NOT NULL,
--     `status`VARCHAR(255) NOT NULL,
--     `licenseNumberPlate` VARCHAR(255) NOT NULL,

--     PRIMARY KEY(`vehicleID`)
-- )DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci