import { getRandomQuote } from "@/helpers/random-quotes";

export async function GET() {
  const generatedQuote = getRandomQuote();

  return Response.json({ quotation: generatedQuote });
}
