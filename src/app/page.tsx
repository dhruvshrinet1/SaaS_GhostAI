import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Ghost AI</h1>
      <div className="flex gap-4 text-sm">
        <Link href="/docs" className="underline underline-offset-4">
          Collaborative doc
        </Link>
        <Link href="/chat" className="underline underline-offset-4">
          AI chat
        </Link>
      </div>
    </div>
  );
}
