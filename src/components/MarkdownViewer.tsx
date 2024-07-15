"use client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <Markdown className="prose lg:prose-xl mt-8" remarkPlugins={[remarkGfm]}>
      {content}
    </Markdown>
  );
}
