/*
  Warnings:

  - A unique constraint covering the columns `[color,size]` on the table `Variant` will be added. If there are existing duplicate values, this will fail.
  - Made the column `productId` on table `Variant` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Variant" DROP CONSTRAINT "Variant_productId_fkey";

-- DropIndex
DROP INDEX "Variant_color_key";

-- DropIndex
DROP INDEX "Variant_size_key";

-- AlterTable
ALTER TABLE "Variant" ALTER COLUMN "productId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Variant_color_size_key" ON "Variant"("color", "size");

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
