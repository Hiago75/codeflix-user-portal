import { NextRequest, NextResponse } from "next/server";
import { LoginSchema } from "@/app/lib/validations/LoginValidation";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = LoginSchema.parse(await request.json());

    return new NextResponse("It just works")
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401,
    });
  }
}