"use client"
import React from "react"

import useQuoteStyles from "./hooks/useQuoteStyles"

export default function Home() {
  const { fetchQuote, quote, status, error } = useQuoteStyles()
  return (
    <main>
      <button onClick={() => fetchQuote()}>Get quote</button>
      <div>{status === "loading" ? "loading" : JSON.stringify(quote)}</div>
    </main>
  )
}
