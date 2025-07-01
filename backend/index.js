import express from "express";
import callRoutes from "./route/call.js"
const app = express();
app.use(express.json());

app.post("/webhook/vapi", async (req, res) => {
  const { message } = req.body;

  switch (message.type) {
    case "status-update":
      console.log(`Call ${message.call.id}: ${message.call.status}`);
      break;
    case "transcript":
      console.log(`${message.role}: ${message.transcript}`);
      break;
    case "function-call":
      return handleFunctionCall(message, res);
  }

  res.status(200).json({ received: true });
});

function handleFunctionCall(message, res) {
  const { functionCall } = message;

  switch (functionCall.name) {
    case "lookup_order":
      const orderData = {
        orderId: functionCall.parameters.orderId,
        status: "shipped",
      };
      return res.json({ result: orderData });
    default:
      return res.status(400).json({ error: "Unknown function" });
  }
}

app.use("/api", callRoutes);
app.listen(3000, () => console.log("Webhook server running on port 3000"));
