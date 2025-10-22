/*
  Warnings:

  - You are about to drop the column `userId` on the `menu` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `menu` DROP FOREIGN KEY `Menu_userId_fkey`;

-- DropIndex
DROP INDEX `Menu_userId_fkey` ON `menu`;

-- AlterTable
ALTER TABLE `menu` DROP COLUMN `userId`;
