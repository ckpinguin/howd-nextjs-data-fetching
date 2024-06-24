"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Separator from "@/components/Separator";
import useQuoteStyles from "@/hooks/use-quote-styles";

export default function Home() {
  const { status, error, quote, fetchQuoteStyles } = useQuoteStyles();

  return (
    <main>
      <Button onClick={fetchQuoteStyles}>use random quote</Button>
      <Separator />
      <Card textColor="aliceBlue" backgroundColor="mediumBlue">
        {quote}
      </Card>
    </main>
  );
}
