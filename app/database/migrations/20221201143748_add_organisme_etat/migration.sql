/*
  Warnings:

  - Added the required column `etat` to the `Organisme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organisme" ADD COLUMN     "etat" TEXT NOT NULL;
