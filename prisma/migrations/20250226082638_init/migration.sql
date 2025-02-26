-- CreateTable
CREATE TABLE `MontoringLog` (
    `logID` VARCHAR(191) NOT NULL,
    `log_Date` DATETIME(3) NOT NULL,
    `observation` VARCHAR(191) NOT NULL,
    `observed_image` VARCHAR(191) NOT NULL,
    `staffID` VARCHAR(191) NOT NULL,
    `fieldID` VARCHAR(191) NOT NULL,
    `cropID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`logID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MontoringLog` ADD CONSTRAINT `MontoringLog_staffID_fkey` FOREIGN KEY (`staffID`) REFERENCES `Staff`(`staffID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MontoringLog` ADD CONSTRAINT `MontoringLog_fieldID_fkey` FOREIGN KEY (`fieldID`) REFERENCES `Field`(`fieldID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MontoringLog` ADD CONSTRAINT `MontoringLog_cropID_fkey` FOREIGN KEY (`cropID`) REFERENCES `Crop`(`cropID`) ON DELETE RESTRICT ON UPDATE CASCADE;
