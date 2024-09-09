import React from "react"

import styles from "./QuoteContent.module.css"
import Card from "../Card"

export default function QuoteContent() {
  const quote = 'Test'
  return <Card>{quote ? quote : null}</Card>
