"use client";

import React from "react";

import Button from "../Button";
import Card from "../Card";
import Separator from "../Separator";
import styles from "./StyleGenerator.module.css";

type Status = "idle" | "loading" | "error";

function StyleGenerator() {
  const [quote, setQuote] = React.useState<string>();
  const [status, setStatus] = React.useState<Status>("idle");

  console.log("STATUS", status);

  const handleClick = async () => {
    // start request
    setStatus("loading");
    const response = await fetch("/api/get-quote-style");
    const json = await response.json();
    // expecting JSON to have a `quote` property,
    // based on the route handler from last workshop
    setQuote(json.quote);

    // set status back to idle
    // after everything's settled
    setStatus("idle");
  };

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleClick}>use random quote</Button>
      <Separator />
      <Card textColor="aliceBlue" backgroundColor="mediumBlue">
        {quote}
      </Card>
    </div>
  );
}

export default StyleGenerator;
