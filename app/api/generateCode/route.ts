import {
  TogetherAIStream,
  TogetherAIStreamPayload,
} from "@/utils/TogetherAIStream";
import { PROMPT } from "@/utils/constants";
export const maxDuration = 60;

export async function POST(req: Request) {
  let { messages, model } = await req.json();

  const payload: TogetherAIStreamPayload = {
    model,
    messages: [
      {
        role: "system",
        content: PROMPT,
               },
      ...messages.map((message: any) => {
        if (message.role === "user") {
          message.content =
            message.content +
            "\n Please ONLY return code, NO backticks or language names.";
        }
        return message;
      }),
    ],
    stream: true,
  };
  const stream = await TogetherAIStream(payload);

  return new Response(stream, {
    headers: new Headers({
      "Cache-Control": "no-cache",
    }),
  });
}
