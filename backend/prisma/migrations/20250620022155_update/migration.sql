-- DropForeignKey
ALTER TABLE "KudoCard" DROP CONSTRAINT "KudoCard_boardId_fkey";

-- AlterTable
ALTER TABLE "KudoBoard" ADD COLUMN     "createdAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "KudoCard" ADD COLUMN     "createdAt" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "KudoCard" ADD CONSTRAINT "KudoCard_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "KudoBoard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
