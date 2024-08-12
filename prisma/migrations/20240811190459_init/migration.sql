-- CreateTable
CREATE TABLE "Quizz" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Quizz_pkey" PRIMARY KEY ("id")
);
