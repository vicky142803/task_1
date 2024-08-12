"use server";
import { PrismaClient } from '@prisma/client';

export interface DataProp {
    id: number;
    question: string;
    answer: string;
}

const prisma = new PrismaClient();

export default async function SaveForm(id: number, question: string, answer: string): Promise<string> {
    console.log("GetData:", id, question, answer);
    try {
        const isAvailable = await prisma.quizz.findFirst({
            where: {
                id: id
            }
        });

        if (!isAvailable) {
            await prisma.quizz.create({
                data: {
                    question,
                    answer
                }
            });
            return "Successfully Created. Please Refresh the Page.";
        }

        await prisma.quizz.update({
            where: {
                id: id
            },
            data: {
                question: question,
                answer: answer
            }
        });

        return "Successfully Updated. Please Refresh the Page.";
    } catch (error) {
        console.error("Error occurred:", error);
        return "Error Occurred. Please Try Again.";
    }
}

export async function GetData() {
    try {
        const data = await prisma.quizz.findMany({
            select: {
                id: true,
                question: true,
                answer: true
            }
        });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export async function DeleteData(id: number):Promise<string> {
    try {
        await prisma.quizz.delete({
            where: {
                id: id
            }
        });
        return "Successfully Deleted. Please Refresh the Page.";
    }catch(error){
        return "Somethind Went Wrong. Please Try Again.";
    }
}