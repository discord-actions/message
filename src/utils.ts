import { getInput } from "@actions/core";

interface Configuration {
  webhookUrl: string;
  message: string;
  username: string;
  avatar: string;
}

type Input = "webhookUrl" | "message" | "username" | "avatar";

export function input(name: Input, required = true, defaultValue = "") {
  const value = getInput(name, {
    trimWhitespace: true,
    required,
  });

  return value || defaultValue;
}

export function createMessage(
  message: string,
  username: string,
  avatar_url: string,
) {
  return {
    content: message,
    attachments: [],
    username,
    avatar_url,
  };
}

export function getConfiguration(): Configuration {
  return {
    webhookUrl: input("webhookUrl"),
    message: input("message"),
    username: input("username", false, "GitHub"),
    avatar: input(
      "username",
      false,
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    ),
  };
}
