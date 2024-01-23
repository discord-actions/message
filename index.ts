import { getInput } from "@actions/core";
import github from "@actions/github";

async function main() {
  console.log("github->discord");

  const webhookUrl = getInput("webhookUrl", {
    trimWhitespace: true,
  });

  console.log({ webhookUrl });
}

main().then();
