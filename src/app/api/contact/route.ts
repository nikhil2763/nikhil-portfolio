import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const newMessage = {
      id: "msg_" + Date.now(),
      name: String(name).trim(),
      email: String(email).trim(),
      subject: String(subject || "Portfolio Inquiry").trim(),
      message: String(message).trim(),
      timestamp: new Date().toISOString(),
    };

    // Store messages in a local messages.json in project root
    const filePath = path.join(process.cwd(), "messages.json");
    let messages = [];

    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        messages = JSON.parse(fileContent);
        if (!Array.isArray(messages)) messages = [];
      } catch (e) {
        messages = [];
      }
    }

    messages.push(newMessage);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), "utf-8");

    return NextResponse.json({
      success: true,
      message: "Message received and saved successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { error: "Failed to process message." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "messages.json");
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ messages: [] });
    }
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const messages = JSON.parse(fileContent);
    return NextResponse.json({ messages });
  } catch (error) {
    return NextResponse.json({ messages: [] });
  }
}
