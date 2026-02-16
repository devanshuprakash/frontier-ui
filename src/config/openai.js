import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function askGPT(userMessage) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",   // cheap + fast
    messages: [
      {
        role: "system",
        content: "You are Devanshu's personal AI coding assistant. Give short clear answers."
      },
      {
        role: "user",
        content: userMessage
      }
    ],
  });

  return response.choices[0].message.content;
}
