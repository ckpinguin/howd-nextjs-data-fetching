"use client"
import React from "react"

import useQuoteStyles from "./hooks/useQuoteStyles"
import Spinner from "@/components/Spinner"

export default function Home() {
  const { fetchQuote, quote, status, error } = useQuoteStyles()
  return (
    <main>
      <button onClick={() => fetchQuote()}>Get quote</button>
      <div>{status === "loading" ? <Spinner /> : JSON.stringify(quote)}</div>
    </main>
  )
}
