import React from "react"

import Card from "../Card"
import styles from "./ErrorCard.module.css"

export default function ErrorCard({ error }: { error: string }) {
  return (
    <Card textColor="white" backgroundColor="tomato-11">
      <h2>An error occurred:</h2>
      {error ? <p>{error}</p> : <p>Unknown error</p>}
    </Card>
  )
}
