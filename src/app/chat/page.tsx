"use client";

import { AiChat } from "@liveblocks/react-ui";

export default function ChatPage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-12">
      <div className="flex-1 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
        <AiChat chatId="ghost-ai-assistant" className="h-full" />
      </div>
    </div>
  );
}
