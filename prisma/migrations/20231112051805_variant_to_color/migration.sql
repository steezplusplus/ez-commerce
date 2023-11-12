/*
  Warnings:

  - You are about to drop the column `size` on the `Size` table. All the data in the column will be lost.
  - You are about to drop the `Variant` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Size` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Variant" DROP CONSTRAINT "Variant_productId_fkey";

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "size",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- DropTable
DROP TABLE "Variant";

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "altText" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Color_image_key" ON "Color"("image");

-- AddForeignKey
ALTER TABLE "Color" ADD CONSTRAINT "Color_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
