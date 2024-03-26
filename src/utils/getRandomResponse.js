import { ChatGPTResponse } from "./ChatGPTResponse";

// Function to randomly select a response from the responses array
export const getRandomResponse = () => {
  const randomIndex = Math.floor(Math.random() * ChatGPTResponse.length);
  return ChatGPTResponse[randomIndex];
};
