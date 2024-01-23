import { getInput, setOutput, setFailed } from "@actions/core";
import github from "@actions/github";

import axios from "axios";

function input(name: "webhookUrl" | "message", required = true) {
  return getInput(name, {
    trimWhitespace: true,
    required,
  });
}

function createMessage(message: string) {
  return {
    content: message,
    attachments: [],
    username: "Not a Bot",
    avatar_url: "https://raw.githubusercontent.com/jackall3n/discord-message/main/images/avatar.png",
  };
}

async function sendMessage() {
  console.log("> Messaging discord...");

  const webhookUrl = input("webhookUrl");
  const message = input("message");

  const payload = createMessage(message);

  await axios.post(webhookUrl, payload);
}

async function main() {
  try {
    await sendMessage();

    setOutput("result", "message send");
  } catch (e) {
    setFailed(e);
  }
}

main().then();
