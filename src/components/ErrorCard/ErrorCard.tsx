import React from "react"

import Card from "../Card"

export default function ErrorCard({ error }: { error?: string }) {
  return (
    <Card textColor="white" backgroundColor="var(--color-tomato-11)">
      <h2>An error occurred:</h2>
      <p>{error}</p>
    </Card>
  )
}
