import { NextResponse } from "next/server"

import { getRandomQuote } from "@/helpers/random-quotes"

export async function GET(request: Request) {
  const res = getRandomQuote()
  console.log(res)
  return NextResponse.json({ quote: res })
  //return NextResponse.json({ res }) // wrong format, should error
  //return NextResponse.error() // generic server error (500) response
  //throw new Error("Not found") // thrown server error
}
