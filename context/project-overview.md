# Ghost AI

## Overview# Install Liveblocks



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



Ghost AI is a real-time collaborative system design workspace. Users describe a system in plain English, an AI agent maps that system onto a shared canvas, collaborators refine the architecture, and the app generates a technical specification from the resulting graph.

## Goals

1. Let authenticated users create and manage architecture projects.
2. Provide a collaborative real-time canvas for system design.
3. Let users import prebuilt starter system designs into the canvas.
4. Let AI generate an initial architecture from a natural language prompt.
5. Let collaborators refine the generated architecture.
6. Convert the final graph into a persistent Markdown technical spec.

## Core User Flow

1. User signs in.
2. User creates or selects a project.
3. User enters the project workspace.
4. User optionally imports a starter system design template into the canvas.
5. User prompts the AI to generate or extend the system design.
6. AI generates nodes and edges in the shared canvas.
7. Collaborators edit and refine the design.
8. User triggers spec generation.
9. App persists the generated Markdown spec.
10. User reviews or downloads the spec.

## Features

### Authentication and Projects

- User sign-in and route protection.
- Project creation, ownership, and collaborator access.
- Project list and workspace navigation.

### Collaborative Canvas

- Shared real-time canvas using Liveblocks and React Flow.
- Live cursors, presence indicators, and node/edge editing.
- Canvas snapshots persisted to the filesystem.

### Starter System Designs

- A curated library of prebuilt system design templates.
- Users can import a starter template into the canvas at any point during editing.
- Templates are static canvas snapshots loaded directly into the active room.
- Covers common patterns: monolith, microservices, event-driven, serverless, and more.

### AI Architecture Generation

- AI generates a system design from a user-supplied prompt.
- Output is structured as canvas nodes and edges written into the shared room.
- Generation runs as a durable background task.

### Spec Generation

- The current canvas graph is converted into a Markdown technical specification.
- Specs are persisted as files and linked to the project in the database.
- Users can view and download generated specs.

## Scope

### In Scope

- Authentication and route protection
- Project creation and ownership
- Collaborator access by project
- Starter system design template library and import
- Real-time shared canvas with nodes, edges, and presence
- AI-powered architecture generation from prompts
- AI-powered Markdown spec generation from the canvas graph
- Persistent storage for project metadata and generated artifacts
- Spec download

### Out Of Scope

- Billing and subscription systems
- Enterprise permission tiers beyond owner and collaborator
- Versioned spec history and review workflows
- Production object storage migration
- Mobile-native applications

## Success Criteria

1. A signed-in user can create and open a project.
2. Multiple users can collaborate in the same canvas simultaneously.
3. A user can import a prebuilt starter design into the canvas.
4. AI can generate an architecture into the shared room from a prompt.
5. The graph can be converted into a persisted Markdown spec.
6. Project metadata and generated artifacts are stored in the correct layers.

## Implementation Status

- **In Progress**: `context/feature-specs/01-design-system.md` — design system and UI primitives.

See `context/progress-tracker.md` for the authoritative current phase, completed work, and next steps.
