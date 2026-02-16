import OpenAI from "openai";
import dotenv from "dotenv";



const client = new OpenAI({
  apiKey: "",
});

export async function askGPT(PROMPT) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",  
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

  ress =  response.choices[0].message.content
  console.log(ress)
};
export default askGPT;