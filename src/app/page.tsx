"use client";
import React from "react";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Separator from "@/components/Separator";

export default function Home() {
  // `<string>` is for TypeScript, since
  //    this state starts out as undefined
  const [quote, setQuote] = React.useState<string>();

  const handleClick = async () => {
    const response = await fetch("/api/get-quote-style");
    const json = await response.json();
    // expecting JSON to have a `quote` property,
    // based on the route handler from last workshop
    setQuote(json.quote);
  };

  return (
    <main>
      <Button onClick={handleClick}>use random quote</Button>
      <Separator />
      <Card textColor="aliceBlue" backgroundColor="mediumBlue">
        {quote}
      </Card>
    </main>
  );
}
