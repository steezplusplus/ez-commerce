/*
  Warnings:

  - You are about to drop the column `inventory` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Variant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "inventory",
DROP COLUMN "size";

-- CreateTable
CREATE TABLE "Size" (
    "id" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
