"use client";
import React from "react";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Separator from "@/components/Separator";

type Status = "idle" | "loading" | "error";

export default function Home() {
  const [quote, setQuote] = React.useState<string>();
  const [status, setStatus] = React.useState<Status>("idle");

  console.log("STATUS", status);

  const handleClick = async () => {
    // start request
    setStatus("loading");
    const response = await fetch("/api/get-quote-styles");
    const json = await response.json();
    // expecting JSON to have a `quote` property,
    // based on the route handler from last workshop
    setQuote(json.quote);

    // set status back to idle
    // after everything's settled
    setStatus("idle");
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
