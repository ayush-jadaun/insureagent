import { VapiClient } from "@vapi-ai/server-sdk";
import { configDotenv } from "dotenv";
configDotenv();


export const vapi = new VapiClient({
  token: process.env.VAPI_API_KEY
});




