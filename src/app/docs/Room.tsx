"use client";

import { ReactNode } from "react";
import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
  return (
    <RoomProvider id="docs:ghost-ai">
      <ClientSideSuspense fallback={<div className="p-8 text-sm text-zinc-500">Loading…</div>}>
        {children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
