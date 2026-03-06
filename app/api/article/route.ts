import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { title } from "process";

export async function POST(req: NextRequest) {
  try {
    const article = await prisma.article.create({
      data: {
        title: "",
        content: "",
        summary: "",
        userId: "",
        id: Date.now().toString(),
      },
    });
   
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 200 },
    );
  } catch (error) {
    return new Response("Not available to create user!!!", { status: 400 });
  }
}
