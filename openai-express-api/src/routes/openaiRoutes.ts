import express, { Request, Response } from "express"
import { getChatCompletion } from "../lib/openai"

const router = express.Router()

router.get("/completion", async (req: Request, res: Response): Promise<void> => {
  const query = req.query.q as string

  if (!query) {
    res.status(400).json({ error: "Query parameter 'q' is required." })
    return
  }

  try {
    // Generate the prompt and get the completion from OpenAI
    const prompt = `You are a search engine. Answer the following query concisely and accurately as if you're a knowledgeable assistant: "${query}"`
    const completion = await getChatCompletion(prompt)

    // Get the origin URL from the "Referer" header
    const originUrl = req.headers.referer || req.headers.origin

    if (!originUrl) {
      res.status(400).json({ error: "Origin URL is not available in the request." })
      return
    }

    // Parse the origin URL and add the "reply" query parameter
    const redirectUrl = new URL(originUrl)
    redirectUrl.searchParams.append("reply", completion)

    // Redirect back to the origin with the added "reply" query parameter
    res.redirect(redirectUrl.toString())
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Internal Server Error" })
  }
})

export default router
