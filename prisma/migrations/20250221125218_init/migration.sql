-- CreateTable
CREATE TABLE `Staff` (
    `staffID` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `address1` VARCHAR(191) NOT NULL,
    `address2` VARCHAR(191) NOT NULL,
    `address3` VARCHAR(191) NOT NULL,
    `address4` VARCHAR(191) NOT NULL,
    `address5` VARCHAR(191) NOT NULL,
    `joindate` DATETIME(3) NOT NULL,
    `DOB` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `contactnum` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `field` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`staffID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
