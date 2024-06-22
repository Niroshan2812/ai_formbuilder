const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");


const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
const safetySettings = {
  categories: [
    HarmCategory.HARM_CATEGORY_HARASSMENT,
   // HarmCategory.HARM_CATEGORY_VIOLENCE,
    HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
  ],
  blockThresholds: {
    [HarmCategory.HARM_CATEGORY_HARASSMENT]: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    //[HarmCategory.HARM_CATEGORY_VIOLENCE]: HarmBlockThreshold.BLOCK_MEDIUM,
    [HarmCategory.HARM_CATEGORY_HATE_SPEECH]: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    [HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT]: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    [HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT]: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
};

 export const AiChatSession =  model.startChat({
  generationConfig,
  //safetySettings,
  history: [
  ],
});
 
