"use client"
import React from "react"

import Button from "@/components/Button"
import Separator from "@/components/Separator"
import Spinner from "@/components/Spinner"

import useQuoteStyles from "./hooks/useQuoteStyles"
import QuoteContent from "@/components/QuoteContent"

export default function Home() {
  const { fetchQuote, quote, status, error } = useQuoteStyles()
  return (
    <main>
      <Button onClick={() => fetchQuote()}>Get quote</Button>
      <Separator />
      <QuoteContent status={status} quote={quote} error={error} />
    </main>
  )
}
