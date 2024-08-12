

// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.quizz.createMany({
    data: [
           {
                question:"What is the capital of France?",
                answer:"Paris"
        
            },
            {
                question:"What is the capital of Germany?",
                answer:"Berlin"
            },
            {
                question:"What is the capital of Italy?",
                answer:"Rome"
            }  ,
            {
                question:"",
                answer:"Madrid"
            }
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
