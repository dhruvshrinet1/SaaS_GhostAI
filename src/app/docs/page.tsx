import { Room } from "./Room";
import { Editor } from "./Editor";

export default function DocsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
      <Room>
        <Editor />
      </Room>
    </div>
  );
}
