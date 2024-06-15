"use client";

import Button from "@/components/Button";
import QuoteContent from "@/components/QuoteContent";
import Separator from "@/components/Separator";
import useQuoteStyle from "@/hooks/use-quote-style";
import type { Status } from "@/types";

export default function Home() {
  const { status, error, quote, fetchQuoteStyle } = useQuoteStyle();

  return (
    <main>
      <Button onClick={fetchQuoteStyle}>use random quote</Button>
      <Separator />
      <QuoteContent status={status} quote={quote} error={error} />
    </main>
  );
}
