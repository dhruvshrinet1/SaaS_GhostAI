# Development Workflow

## Approach# Install Liveblocks



Help the user install Liveblocks into their existing

application or build a new app. Keep your replies succinct, not updating the user on progress. You've copied this prompt from the Liveblocks homepage. 



## 1. Install the `liveblocks-best-practices` skill



Check if you have the `liveblocks-best-practices` skill installed. If you do not

have it installed, ask the user to install it:

npx skills add liveblocks/skills --skill liveblocks-best-practices --global

## 2. Read the get started overview



Read the get started overview page and internalize the list of guides:

https://liveblocks.io/docs/get-started.md



## 3. Identify the app's framework



Scan files to find which framework this app is using (e.g. Next.js), for example

by looking inside `package.json`.



## 4. Ask the user what they want to build



You must ask the user which feature(s) they'd like to install. Use this to

identify which get started guide to read. You can ask multiple questions, for

example:



<example>



Q: Which Liveblocks features would you like to add? Features include Comments,

Multiplayer, AI Collaboration, AI Chat, Notifications.

A: Multiplayer



Q: What kind of multiplayer would you like in your app?

A: In a text editor



Q: [Scans package.json] I see you're using Tiptap, would you like to make it

multiplayer?

A: Yes



[Selects Next.js get started guide for Tiptap]



</example>



Other things to check for:



- Where comments will feature in the page (e.g. in a text editor, on a flowchart, in a sidebar, etc.)

- What multiplayer will be for (e.g. a canvas, table, editor, etc.)

- Is this an AI chat with front end tooling and ready-made UI (AI Copilot)



Note down your selected guide.



## 5. Think about how to authenticate Liveblocks



Think about how to authenticate Liveblocks, using ID tokens by default. You must

ensure the user is authenticated with their secret key and `authEndpoint`, **do

not** finish if the user is still using their public API key with

`publicApiKey`. [Learn more](https://liveblocks.io/docs/authentication/).

[Next.js ID token quickstart](https://liveblocks.io/docs/authentication/id-token/nextjs).

authEndpoint="api/liveblocks-auth"

Remember that ID tokens requires users to create a room manually, for example

with `liveblocks.createRoom` from `@liveblocks/node`, or with the REST API.

const room = await liveblocks.createRoom("my-room-id", {
  defaultAccesses: ["room:write"],
});

Additionally, if the user's app has users inside of it, authenticate them and

attach their name, avatar, and color (if they have them) to Liveblocks.



## 6. Read the get started guide



Read your selected get started guide from 4. and follow each step of the guide

to install Liveblocks. Remember to adapt the guide to use `authEndpoint` and

their secret key. 



Make sure to read all additional documentation pages that are referenced in the

guide, and **follow those guides too**. The pages listed as next steps are 

especially important.



### 7. Set up environment variables



Create a file for the user where they can insert their environment variables,

for example a local env file, and let the user know where it is (link them if you

can). Leave a space for their keys. Let the user know they can fetch their keys

from the [Liveblocks dashboard](https://liveblocks.io/dashboard) by creating a

new project.



Example:

# https://liveblocks.io/dashboard
LIVEBLOCKS_SECRET_KEY=

## Important tips



- You **must** identify the correct get started guide.

- You **must** follow any additional steps that are linked to at the bottom.

  Load and read all linked pages.

- **Never** leave the user with `publicApiKey` in their code. You must always

  set up authentication for them, using ID tokens unless specified otherwise.



Build this project incrementally using a spec-driven workflow. Context files define what to build, how to build it, and what the current state of progress is. Always implement against these specs — do not infer or invent behavior from scratch.

## Scoping Rules

- Work on one feature unit or subsystem at a time.
- Prefer small, verifiable increments over large speculative changes.
- Do not combine unrelated system boundaries in a single implementation step.

## When To Split Work

Split an implementation step if it combines:

- UI changes and background task changes
- Real-time canvas state and database persistence
- Multiple unrelated API routes
- Behavior that is not clearly defined in the context files

If a change cannot be verified end to end quickly, the scope is too broad — split it.

## Handling Missing Requirements

- Do not invent product behavior that is not defined in the context files.
- If a requirement is ambiguous, resolve it in the relevant context file before implementing.
- If a requirement is missing, add it as an open question in `progress-tracker.md` before continuing.

## Protected Foundation Components

Do not modify generated third-party foundation components unless explicitly instructed.

This includes:

- `components/ui/*` (shadcn/ui components)
- third-party library internals

These should remain default and reusable.

Project-specific styling, layout changes, and feature logic must be implemented in app-level components instead of modifying foundation components.

Only modify these files when a task explicitly requires it.

## Keeping Docs In Sync

Update the relevant context file whenever implementation changes:

- System architecture or boundaries
- Storage model decisions
- Code conventions or standards
- Feature scope

Progress state must reflect the actual state of the implementation, not the intended state.

## Before Moving To The Next Unit

1. The current unit works end to end within its defined scope.
2. No invariant defined in `architecture-context.md` was violated.
3. `progress-tracker.md` reflects the completed work.
