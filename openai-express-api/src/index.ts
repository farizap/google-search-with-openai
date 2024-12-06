import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import openaiRoutes from "./routes/openaiRoutes"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json())
app.use("/api", openaiRoutes)

// Root endpoint
app.get("/", (req, res) => {
  res.send("OpenAI API Server is running!")
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
