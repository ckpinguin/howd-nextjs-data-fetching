"use client"
import React, { useState } from "react"

type Status = "idle" | "loading" | "error"

export default function Home() {
  const [quote, setQuote] = useState<string>()
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string>()

  console.log("STATUS", status)
  console.log("QUOTE", quote)
  console.log("ERROR", error)

  const handleClick = async () => {
    setStatus("loading")
    try {
      const response = await fetch("/api/get-quotes-styles")
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const json = await response.json()
      if (!json?.quote) {
        throw new Error("Malformed response")
      }

      setQuote(json.quote)
      setStatus("idle")
    } catch (err) {
      setStatus("error")
      setError(err?.toString())
    }
  }

  return (
    <main>
      <button onClick={handleClick}>Get quote</button>
      <div>{status === "loading" ? "loading" : JSON.stringify(quote)}</div>
    </main>
  )
}
