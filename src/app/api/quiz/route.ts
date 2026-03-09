import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const quiz = await prisma.quiz.create({
      data: {
        id: Date.now().toString(),
        question: "",
        options: [],
        answer: "",
        articleId: "",
      },
    });
    return NextResponse.json(
      { message: "Quiz create success" },
      { status: 200 },
    );
  } catch (error) {
    return new Response("Not available to create user!!!", { status: 400 });
  }
}
