"use client"
import React, { useState } from "react"

type Status = "idle" | "loading" | "error"

export default function Home() {
  const [quote, setQuote] = useState<string>()
  const [status, setStatus] = useState<Status>("idle")

  console.log("STATUS", status)
  console.log("QUOTE", quote)

  const handleClick = async () => {
    setStatus("loading")
    const response = await fetch("/api/get-quotes-styles")
    const json = await response.json()
    setQuote(json)
    console.log(json)
    setStatus("idle")
  }

  return (
    <main>
      <button onClick={handleClick}>Get quote</button>
      <div>{status === "loading" ? "loading" : quote}</div>
    </main>
  )
}
