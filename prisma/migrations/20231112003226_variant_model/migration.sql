/*
  Warnings:

  - You are about to drop the column `colors` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `sizes` on the `Variant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[color]` on the table `Variant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[size]` on the table `Variant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[image]` on the table `Variant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `color` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inventory` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Variant_name_key";

-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "colors",
DROP COLUMN "name",
DROP COLUMN "sizes",
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "inventory" INTEGER NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Color";

-- CreateIndex
CREATE UNIQUE INDEX "Variant_color_key" ON "Variant"("color");

-- CreateIndex
CREATE UNIQUE INDEX "Variant_size_key" ON "Variant"("size");

-- CreateIndex
CREATE UNIQUE INDEX "Variant_image_key" ON "Variant"("image");
