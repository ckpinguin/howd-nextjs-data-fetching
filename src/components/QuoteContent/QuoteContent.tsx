import React from "react"

import { Status } from "@/app/types"

import Card from "../Card"
import ErrorCard from "../ErrorCard"
import Spinner from "../Spinner"

export interface QuoteContentProps {
  status: Status
  quote?: string
  error?: string
}

export default function QuoteContent({
  status,
  quote,
  error,
}: QuoteContentProps) {
  if (status === "loading") return <Spinner />
  if (status === "error") return <ErrorCard error={error} />
  if (quote)
    return (
      <Card textColor="aliceBlue" backgroundColor="mediumBlue">
        {quote}
      </Card>
    )
  return undefined
}
