import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Assistant Endpoint for Portfolio Queries
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const client = getAIClient();
    if (!client) {
      // Return helpful fallback response if API key is not yet set
      return res.json({
        reply: "Hello! I am Emmanuel's AI Portfolio Assistant. Currently, the API key is running in demo mode, but I can tell you that Emmanuel is a Web Designer & WordPress/Fullstack Developer with 5+ years of experience specializing in high-converting custom WordPress sites, WooCommerce stores, and React web apps. How can I help you today?",
        demoMode: true,
      });
    }

    const systemInstruction = `You are NEXORA AI, the senior project advisor and virtual representative for NEXORA Studio, a world-class digital agency crafting spatial WebGL environments, luxury e-commerce flagships, and generative AI web platforms.
NEXORA Studio Info:
- Tagline: "Crafting Digital Experiences Beyond Expectations"
- Core Capabilities: WebGL 2.0 & 3D Interactive Environments, Creative Direction & Brand Design Systems, Enterprise Next.js 15 Architecture, Generative AI Platforms, Headless Shopify Plus Flagships.
- Global Hubs: London (Mayfair), Tokyo (Roppongi Hills), New York (Hudson Yards), Zurich (Bahnhofstrasse).
- Key Credentials: 50+ Global Awards (Awwwards Site of the Month, FWA of the Day, Webby Honoree), 60 FPS WebGL Standards, Lighthouse 100/100 Speed.
- Pricing Tiers:
  * Brand Strategy & Digital Flagship: From $18,000 (3-5 weeks)
  * Spatial WebGL 3D Platform: From $25,000 (4-8 weeks)
  * Headless Luxury E-Commerce: From $28,000 (6-10 weeks)
- Persona: Sophisticated, articulate, confident, direct, and helpful. Assist visionaries, founders, and CTOs in estimating project scope, technical stack choices, and agency capabilities. Offer to launch the interactive Scope Estimator or schedule a preliminary discovery call.`;

    const chatMessages = [
      { role: "user", parts: [{ text: `System context: ${systemInstruction}` }] },
      { role: "model", parts: [{ text: "Understood! I am ready to assist prospective clients about Emmanuel's portfolio, skills, and rates." }] },
    ];

    if (Array.isArray(history)) {
      for (const item of history) {
        if (item.sender === "user") {
          chatMessages.push({ role: "user", parts: [{ text: item.text }] });
        } else if (item.sender === "assistant") {
          chatMessages.push({ role: "model", parts: [{ text: item.text }] });
        }
      }
    }

    chatMessages.push({ role: "user", parts: [{ text: message }] });

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: chatMessages,
    });

    const reply = response.text || "I'd be happy to assist you with Emmanuel's portfolio and services. Feel free to leave a message in the contact form!";
    res.json({ reply });
  } catch (err: any) {
    console.error("Gemini API Error:", err);
    res.status(500).json({
      error: "Failed to process message",
      details: err.message,
    });
  }
});

// Contact & Project Quote Endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, projectType, budget, message } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  // Simulate storing message or sending notification
  console.log("New Project Inquiry Received:", { name, email, projectType, budget, message });

  res.json({
    success: true,
    message: `Thank you, ${name}! Your inquiry for a ${projectType || 'project'} has been received. Emmanuel will reply to ${email} within 24 hours.`,
    referenceId: `EM-${Math.floor(100000 + Math.random() * 900000)}`,
  });
});

// Vite Middleware for Dev & Static serving for Production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
