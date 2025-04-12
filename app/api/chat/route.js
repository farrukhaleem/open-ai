// app/api/chat/route.js
export async function POST(req) {
   try {
     const body = await req.json();
     const { userInput } = body;
 
     const headers = {
       "Api-Key": process.env.TINYTALK_API_KEY, // secure key (not NEXT_PUBLIC)
       "Content-Type": "application/json",
       "Origin": "https://dashboard.tinytalk.ai"
     };
 
     const payload = JSON.stringify({
       botId: "66eef580-49f7-4286-957b-e55a8c1e9c5b",
       messages: [{ role: "user", content: userInput }],
       temperature: 0.1
     });
 
     const response = await fetch("https://api.tinytalk.ai/v1/chat/completions", {
       method: "POST",
       headers,
       body: payload,
     });
 
     // Stream response back to frontend
     return new Response(response.body, {
       headers: {
         "Content-Type": "text/event-stream",
         "Cache-Control": "no-cache",
         "Connection": "keep-alive",
       },
     });
   } catch (error) {
     console.error("API error:", error);
     return new Response("Internal Server Error", { status: 500 });
   }
 }
 