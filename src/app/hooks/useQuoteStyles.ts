import { useEffect, useState } from "react"

type Status = "idle" | "loading" | "error"

interface UseQuoteStylesReturn {
  fetchQuote: () => Promise<string>
  quote: string
  status: Status
  error: string | undefined
}

export default function useQuoteStyles(): UseQuoteStylesReturn {
  const [quote, setQuote] = useState<string>("")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string>()

  console.log("STATUS", status)
  console.log("QUOTE", quote)
  console.log("ERROR", error)

  async function fetchQuote(): Promise<string> {
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
    return quote
  }

  return { fetchQuote, quote, status, error }
}
