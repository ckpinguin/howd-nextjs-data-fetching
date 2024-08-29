import { NextResponse } from "next/server"

import { getRandomQuote } from "@/helpers/random-quotes"

export async function GET(request: Request) {
  const res = getRandomQuote()
  console.log(res)
  return NextResponse.json(JSON.stringify(res))
}
