"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Separator from "@/components/Separator";
import useQuoteStyles from "@/hooks/use-quote-style";

export default function Home() {
  const { status, error, quote, fetchQuoteStyle } = useQuoteStyles();

  return (
    <main>
      <Button onClick={fetchQuoteStyle}>use random quote</Button>
      <Separator />
      <Card textColor="aliceBlue" backgroundColor="mediumBlue">
        {quote}
      </Card>
    </main>
  );
}
