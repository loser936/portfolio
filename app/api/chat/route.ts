//import { google } from "@ai-sdk/google";
import {openai} from "@ai-sdk/openai";
import { streamText  } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import {getWorkExperiences, getProjects, getSkills, getEducation, getCV, getAboutMe, getContact, getHelp } from "./tools";
export const maxDuration = 30;


function errorHandler(error: unknown) {
  console.error('[CHAT-API] Error:', error);
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    messages.unshift(SYSTEM_PROMPT);


    const schemaJson = getProjects.parameters;
    //console.log(JSON.stringify(schemaJson, null, 2));


    const tools = {
      getWorkExperiences,
      getProjects,
      getSkills, 
      getEducation, 
      getCV, 
      getAboutMe, 
      getContact, 
      getHelp
    };

    const result =  streamText({
    //model: google("models/gemini-1.5-flash-latest"),
    model: openai("gpt-4o-mini"),
    messages,
    toolCallStreaming: true,
    tools,
    maxSteps: 2,
    });
    
    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (error) {
    console.error('[CHAT-API] Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}








{/**
    
    import { google } from "@ai-sdk/google";
//import {openai} from "@ai-sdk/openai";
import { streamText, generateText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    messages.unshift(SYSTEM_PROMPT);
    

    const result = await generateText({
        model: google("models/gemini-1.5-flash-latest"),
        //model: openai("gpt-4o-mini"),
        messages,
    });
 
    const streamResponse = result.toDataStreamResponse();
    const reader = streamResponse.body?.getReader();

    if (reader) {
        let fullText = "";
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            fullText += decoder.decode(value, { stream: true });
        }

        console.log("OpenAI Response Stream:", fullText);
        
    }
  
        console.log('[USER] Incoming messages:', result.toDataStreamResponse());
        return result.toDataStreamResponse();
  } 
  
  catch (error) {
    console.error('[CHAT-API] Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
 }*/}