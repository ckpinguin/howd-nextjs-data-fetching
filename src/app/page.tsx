"use client";
import React from "react";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Separator from "@/components/Separator";

type Status = "idle" | "loading" | "error";

export default function Home() {
  const [quote, setQuote] = React.useState<string>();
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string>();

  console.log("STATUS", status);
  console.log("ERROR", error);

  const handleClick = async () => {
    // reset error
    setError(undefined);

    try {
      // start request
      setStatus("loading");
      const response = await fetch("/api/get-quote-styles");
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      if (!json?.quote) {
        throw new Error("Malformed response");
      }

      setQuote(json.quote);
      setStatus("idle");
    } catch (error) {
      setError(error?.toString());
      setStatus("error");
    }
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
