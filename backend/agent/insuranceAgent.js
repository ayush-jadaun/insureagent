import { vapi } from "../config/vapiConfig.js";

export const assistant = await vapi.assistants.create({
  name: "Inusrance Agent",
  firstMessage:
    "Hi! I'm calling about your interest in our software solutions.",
  model: {
    provider: "openai",
    model: "gpt-4o",
    temperature: 0.7,
    messages: [
      {
        role: "system",
        content:
          "You are a friendly insurance representative",
      },
    ],
  },
  voice: {
    provider: "11labs",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
  },
});

