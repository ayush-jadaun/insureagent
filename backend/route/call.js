import express from "express";
import { vapi } from "../config/vapiConfig.js";

const router = express.Router();

/**
 * POST /call
 * Body: { phoneNumberId: string, customerNumber: string, assistantId: string }
 */

const phone_number=process.env.PHONE_NUMBER_ID
const assistant_id=process.env.ASSISTANT_ID
console.log(phone_number,assistant_id)
router.post("/call", async (req, res) => {
  const {
    phoneNumberId = phone_number,
    customerNumber,
    assistantId = assistant_id,
  } = req.body;

  if (!phoneNumberId || !customerNumber || !assistantId) {
    return res.status(400).json({
      error:
        "Missing required fields: phoneNumberId, customerNumber, assistantId",
    });
  }

  try {
    const call = await vapi.calls.create({
      assistantId, 
      phoneNumberId,
      customer: { number: customerNumber },
    });
    return res.status(201).json({ call });
  } catch (error) {
    console.error("Error creating call:", error);
    return res.status(500).json({ error: "Failed to initiate call" });
  }
});

export default router;
