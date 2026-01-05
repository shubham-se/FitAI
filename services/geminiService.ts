
import { GoogleGenAI, Type } from "@google/genai";
import { UserData, WorkoutPlan } from "../types.ts";

export async function generateWorkoutPlan(userData: UserData): Promise<WorkoutPlan> {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    throw new Error("API Key is missing. The application requires an API_KEY environment variable.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Generate a highly personalized weekly gym workout plan for a user with the following profile:
    - Age: ${userData.age}
    - Gender: ${userData.gender}
    - Height: ${userData.height}
    - Weight: ${userData.weight}
    - Goal: ${userData.goal}
    - Experience Level: ${userData.experience}
    - Training frequency: ${userData.daysPerWeek} days per week
    - Physical limitations/Injuries: ${userData.limitations || "None"}

    Please provide a structured day-by-day plan including specific exercises, sets, reps, rest periods, and estimated duration.
    Ensure the intensity matches their experience level and the exercises account for their limitations.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          summary: { type: Type.STRING },
          days: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                dayName: { type: Type.STRING },
                focus: { type: Type.STRING },
                duration: { type: Type.STRING },
                exercises: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      sets: { type: Type.NUMBER },
                      reps: { type: Type.STRING },
                      rest: { type: Type.STRING }
                    },
                    required: ["name", "sets", "reps", "rest"]
                  }
                }
              },
              required: ["dayName", "focus", "duration", "exercises"]
            }
          }
        },
        required: ["title", "summary", "days"]
      }
    }
  });

  try {
    const text = response.text;
    if (!text) throw new Error("Empty response from AI");
    const data = JSON.parse(text);
    return data as WorkoutPlan;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("Failed to generate a valid workout plan. Please try again.");
  }
}
