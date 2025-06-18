/*
  Warnings:

  - Added the required column `upvotes` to the `KudoCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "KudoCard" ADD COLUMN     "upvotes" INTEGER NOT NULL;
