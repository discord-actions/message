import core from "@actions/core";
import github from "@actions/github";

async function main() {
  console.log("github->discord");

  const webhookUrl = core.getInput("webhookUrl", {
    trimWhitespace: true,
  });

  console.log({ webhookUrl });
}

main().then();
