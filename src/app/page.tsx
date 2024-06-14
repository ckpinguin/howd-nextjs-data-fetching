"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Separator from "@/components/Separator";
import useQuoteStyle from "@/hooks/use-quote-style";

type Status = "idle" | "loading" | "error";

export default function Home() {
  const { status, error, quote, fetchQuoteStyle } = useQuoteStyle();

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
