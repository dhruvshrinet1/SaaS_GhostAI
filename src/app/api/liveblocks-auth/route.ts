import { randomUUID } from "crypto";
import { Liveblocks } from "@liveblocks/node";
import { NextRequest, NextResponse } from "next/server";
import { guestFromId } from "@/lib/guest";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

const GUEST_COOKIE = "ghost-ai-guest-id";

export async function POST(request: NextRequest) {
  let guestId = request.cookies.get(GUEST_COOKIE)?.value;
  const isNewGuest = !guestId;
  if (!guestId) {
    guestId = randomUUID();
  }

  const guest = guestFromId(guestId);

  const session = liveblocks.prepareSession(guest.id, {
    userInfo: {
      name: guest.name,
      avatar: "",
      color: guest.color,
    },
  });

  // Grants access to the collaborative editor rooms and AI chats.
  session.allow("*", ["*:write"]);

  const { status, body } = await session.authorize();

  const response = new NextResponse(body, { status });
  if (isNewGuest) {
    response.cookies.set(GUEST_COOKIE, guestId, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
  }
  return response;
}
