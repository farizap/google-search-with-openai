
# ExpressJS + TypeScript OpenAI Chat API

This project provides a simple ExpressJS server using TypeScript, which integrates with OpenAI's Chat Completion API. The server acts like a search engine assistant, processing queries provided as query parameters and redirecting the user back with a reply.

## Features

- Receives user input via the `q` query parameter.
- Generates responses using OpenAI's `gpt-4o-mini` model.
- Redirects the user back to the origin with a `reply` query parameter containing the generated response.

## Requirements

- Node.js (>=16.x)
- npm or yarn
- OpenAI API Key

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file based on the provided `.env.example` file and set your OpenAI API key.

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file:
   ```plaintext
   OPENAI_API_KEY=your_openai_api_key
   ```

## Running the Server

Start the development server:

```bash
npm run dev
```

Start the production server:

```bash
npm run build
npm start
```

## API Usage

### Endpoint: `/api/completion`

**Method**: `GET`  
**Query Parameter**:
- `q` (string): The user query to process.

The server generates a response using the OpenAI API and redirects the user back to the origin URL with the `reply` parameter added.

### Example Request:

```bash
GET http://localhost:3000/api/completion?q=What%20is%20the%20capital%20of%20France?
```

### Example Workflow:
1. Request:  
   ```bash
   GET http://localhost:3000/api/completion?q=What%20is%20the%20capital%20of%20France
   ```

2. OpenAI Response:  
   `The capital of France is Paris.`

3. Redirect:  
   ```
   HTTP 302 Found
   Location: http://origin-url.com?reply=The%20capital%20of%20France%20is%20Paris
   ```

## Development

- Build the TypeScript code:
  ```bash
  npm run build
  ```

- Run linting:
  ```bash
  npm run lint
  ```

## Project Structure

```
src/
├── lib/
│   └── openai.ts     # OpenAI API integration
├── routes/
│   └── openaiRoutes.ts # API routes
├── app.ts            # Express app setup
└── server.ts         # Server entry point
```

## .env Example

```plaintext
OPENAI_API_KEY=your_openai_api_key
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
