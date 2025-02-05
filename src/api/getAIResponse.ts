import { API_BASE_URL, API_KEY } from "../libs/utils/env";
import { SYSTEM_PROMPT } from "../libs/utils/SYSTEM_PROMPT";

export const getAIResponse = async (message: string) => {
  try {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/${API_BASE_URL}/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${API_KEY.trim()}`,
        },
        body: JSON.stringify({
          model: "meta/llama-3.1-70b-instruct",
          messages: [
            { content: SYSTEM_PROMPT, role: "assistant" },
            { content: message, role: "user" },
          ],
          temperature: 0.2,
          top_p: 0.7,
          frequency_penalty: 0,
          presence_penalty: 0,
          max_tokens: 1024,
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error?.message || "Gagal mendapatkan respons dari AI"
      );
    }

    const data = await response.json();
    return data.choices[0].message || "Tidak ada respons dari AI";
  } catch (error) {
    console.error("Error:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Terjadi kesalahan saat memproses permintaan AI."
    );
  }
};
