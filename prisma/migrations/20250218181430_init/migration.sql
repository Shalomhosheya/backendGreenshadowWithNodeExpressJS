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
