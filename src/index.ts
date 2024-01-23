import core from "@actions/core";
import github from "@actions/github";

async function main() {
  const webhookUrl = core.getInput("webhookUrl", {
    trimWhitespace: true,
  });


}

main().then();
