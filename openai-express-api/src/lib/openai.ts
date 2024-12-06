import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"

export const getChatCompletion = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful and concise search engine assistant." },
          { role: "user", content: prompt },
        ],
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    )

    return response.data.choices[0].message.content.trim()
  } catch (error: any) {
    throw new Error(error.response?.data?.error?.message || "Failed to fetch chat completion")
  }
}
