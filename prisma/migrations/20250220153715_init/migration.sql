-- CreateTable
CREATE TABLE `Field` (
    `fieldID` VARCHAR(191) NOT NULL,
    `fieldname` VARCHAR(191) NOT NULL,
    `fieldLocation` VARCHAR(191) NOT NULL,
    `fieldSize` VARCHAR(191) NOT NULL,
    `fieldStaff` VARCHAR(191) NOT NULL,
    `fieldPic` LONGBLOB NOT NULL,
    `fieldPic2` LONGBLOB NOT NULL,

    PRIMARY KEY (`fieldID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
