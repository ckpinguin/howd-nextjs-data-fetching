import { getRandomQuote } from "@/helpers/random-quotes"

export async function GET(request: Request) {
  const res = getRandomQuote()
  console.log(res)
  return new Response(JSON.stringify(res), {
    headers: { "Content-Type": "application/json" },
  })
}
