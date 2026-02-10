const axios = require("axios");
exports.ask = async (question) => {
  if (typeof question !== "string" || question.trim().length === 0) {
    throw new Error("AI input must be a non-empty string");
  }
  const prompt = `${question}\n\nAnswer in ONE WORD ONLY.`;
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const rawText =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
    const words = rawText.replace(/[^a-zA-Z\s]/g, "").split(/\s+/);
    return words[words.length - 1] || "Unknown";
  } catch (err) {
    console.error(
      "Gemini API error:",
      err.response?.status,
      err.response?.data || err.message
    );
    throw new Error("AI service failed");
  }
};