-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "author" TEXT NOT NULL,
    "kudoId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_kudoId_fkey" FOREIGN KEY ("kudoId") REFERENCES "KudoCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
