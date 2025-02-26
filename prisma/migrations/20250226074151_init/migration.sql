-- CreateTable
CREATE TABLE `EquipmentDetails` (
    `equipDetailID` VARCHAR(191) NOT NULL,
    `data` VARCHAR(191) NOT NULL,
    `response` VARCHAR(191) NOT NULL,
    `equipID` VARCHAR(191) NOT NULL,
    `staffID` VARCHAR(191) NOT NULL,
    `fieldID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`equipDetailID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EquipmentDetails` ADD CONSTRAINT `EquipmentDetails_staffID_fkey` FOREIGN KEY (`staffID`) REFERENCES `Staff`(`staffID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EquipmentDetails` ADD CONSTRAINT `EquipmentDetails_fieldID_fkey` FOREIGN KEY (`fieldID`) REFERENCES `Field`(`fieldID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EquipmentDetails` ADD CONSTRAINT `EquipmentDetails_equipID_fkey` FOREIGN KEY (`equipID`) REFERENCES `Equipment`(`equipID`) ON DELETE RESTRICT ON UPDATE CASCADE;
