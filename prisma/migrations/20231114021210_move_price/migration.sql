/*
  Warnings:

  - You are about to drop the column `price` on the `Inventory` table. All the data in the column will be lost.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "price";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "price" INTEGER NOT NULL;
