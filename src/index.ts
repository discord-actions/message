import { debug, setFailed, setOutput } from "@actions/core";
import axios from "axios";

import { type Configuration } from "./types";
import { createMessage, getConfiguration } from "./utils";

async function sendMessage(configuration: Configuration) {
  debug("Messaging discord...");

  const payload = createMessage(
    configuration.message,
    configuration.username,
    configuration.avatar,
  );

  await axios.post(configuration.webhookUrl, payload);
}

async function main() {
  try {
    const configuration = getConfiguration();

    await sendMessage(configuration);

    setOutput("result", "message send");
  } catch (e) {
    setFailed(e);
  }
}

main().then();
