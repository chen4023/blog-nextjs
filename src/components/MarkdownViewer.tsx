"use client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <Markdown
      className="prose lg:prose-xl mt-8 max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ref, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              language={match[1]}
              style={dracula}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="w-full max-h-80 object-cover rounded-sm"
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
}
