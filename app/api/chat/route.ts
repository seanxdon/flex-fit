import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'
 
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  let { workout, days, exercises, muscle } = await req.json()
 
  let messagePrompt;
  if (!workout) {
    messagePrompt = `You are a certified personal trainer with over 10 years of experience.  Please help me find exercises that target the ${muscle} muscle. I am looking for ${exercises} exercises and want that exact amount returned. Please provide the exercises that only target that muscle with the amount of sets and rep recommended. Please provide the word Exercise with the number following to make it easier to read the response. No need for an explanation and return in the same format every time.`
  } else {
    messagePrompt = `You are a certified personal trainer with over 10 years of experience. Please create a workout plan for me to follow for the each day of the week. I am working out ${days} days out of the week with no exceptions to the plan, each day listed will be a new workout. I want to follow a ${workout} routine. Each day I am working out I am following one of these areas. Please provide the day of the week for the first portion of the response and exercises with the amount of sets and rep recommended. I want to have ${exercises} exercises per day with no exceptions to the plan. No need for an explanation and return in the same format every time.`
  }

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages : [
      {
        role: "user",
        content: messagePrompt
      }
    ]
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}