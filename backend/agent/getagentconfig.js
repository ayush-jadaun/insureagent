import fs from "fs";
import axios from "axios";

const API_KEY = process.env.VAPI_API_KEY 
const ASSISTANT_ID = "276b5ef3-0f62-499d-bc2a-5afe1075da91";

axios
  .get(`https://api.vapi.ai/assistant/${ASSISTANT_ID}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Accept: "application/json",
    },
  })
  .then((response) => {
    fs.writeFileSync(
      "assistant_config.json",
      JSON.stringify(response.data, null, 2)
    );
    console.log("✅ Assistant config saved to assistant_config.json");
  })
  .catch((err) => {
    if (err.response) {
      console.error("❌ API error:", err.response.status, err.response.data);
    } else {
      console.error("❌ Network error:", err.message);
    }
  });
