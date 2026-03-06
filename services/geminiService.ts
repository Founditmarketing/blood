
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AUTHOR_NAME, AUTHOR_AKA, BIO, BOOKS, RECOMMENDATIONS, REVIEWS, AMAZON_STORE_URL, AMAZON_ABOUT_URL } from "../constants";

const getSystemInstruction = () => {
  const bookDetails = BOOKS.map(b => `${b.title}: ${b.subtitle} - ${b.description}`).join("\n\n");
  const recommendationDetails = RECOMMENDATIONS.map(r => `Insight: ${r.question}\nVernon's Response: "${r.quote}"`).join("\n\n");
  const reviewDetails = REVIEWS.map(r => `Reviewer ${r.author} says about ${r.bookId}: "${r.content}"`).join("\n\n");

  return `You are a virtual assistant for the author ${AUTHOR_NAME} (also known as ${AUTHOR_AKA}). 
  Your goal is to help fans and readers learn more about Daniel's books on legacy, spiritual development, and personal history. 
  
  Daniel's Biography: ${BIO}
  
  Detailed Book Info:
  ${bookDetails}
  
  Specific Features of the History Journals:
  - Size: 7 x 10 inches (ample writing space).
  - Page count: 125 pages.
  - Features: Inspirational prompts, dedicated pages for milestones, 'Letters to Children' sections, and artistic designs for draws/scribbles.
  - Purpose: To 'immortalize cherished memories' and 'capture the essence' of parenthood.
  
  Reviewer Feedback & Social Proof:
  ${reviewDetails}
  
  Specific Knowledge Points:
  - "Spiritual Development" is highly recommended for educators and those on the 'front lines' in schools.
  - "Mom's History" is noted by readers as a 'great gift' for friends entering motherhood for the first time.
  - Daniel's Official Amazon Store: ${AMAZON_STORE_URL}
  
  Personality Guidelines:
  1. Be warm, professional, and humble. 
  2. Speak with the wisdom of a teacher and the heart of a father.
  3. Encourage readers to document their unique experiences.
  4. Use real reader feedback (like how the books provide a 'place to write down precious moments') when answering.
  5. Direct all purchase inquiries to the Amazon store: ${AMAZON_STORE_URL}
  6. You are "The Legacy Guide".`;
};

export class GeminiAssistant {
  private ai?: GoogleGenAI;
  private chat?: Chat;

  constructor() {
    // Gracefully handle missing keys in Vercel edge environments
    const key = process.env.API_KEY;
    if (!key || key === "undefined") {
      console.warn("Blood Library Archives: AI Concierge API key is not configured in this environment.");
      return;
    }

    try {
      this.ai = new GoogleGenAI({ apiKey: key });
      this.chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: getSystemInstruction(),
        },
      });
    } catch (e) {
      console.error("Failed to initialize Google GenAI SDK", e);
    }
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.chat) {
      return "The connection to the archives is currently offline. Please contact the administrator to provide the library key.";
    }
    try {
      const result: GenerateContentResponse = await this.chat.sendMessage({ message });
      return result.text || "I'm sorry, I couldn't process that. Please try again.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "The connection to the archives is weak. Please try again in a moment.";
    }
  }

  async *sendMessageStream(message: string) {
    if (!this.chat) {
      yield "The connection to the archives is currently offline. Please complete the Vercel configuration by providing the GEMINI_API_KEY environment variable.";
      return;
    }
    try {
      const response = await this.chat.sendMessageStream({ message });
      for await (const chunk of response) {
        const c = chunk as GenerateContentResponse;
        yield c.text || "";
      }
    } catch (error) {
      console.error("Gemini Streaming Error:", error);
      yield "An error occurred while connecting to the library.";
    }
  }
}
