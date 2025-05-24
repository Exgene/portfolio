import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import DOMPurify from "isomorphic-dompurify";
import { CopyButton } from "@/components/CopyButton";

type ComponentWithChildren = { children?: React.ReactNode };

const CodeBlock = async ({ children, className }: { children: string; className?: string }) => {
  const language = className?.replace("language-", "") || "python";

  let grammar;
  switch (language) {
    case "typescript":
    case "ts":
      grammar = Prism.languages.typescript;
      break;
    case "tsx":
      grammar = Prism.languages.tsx;
      break;
    case "python":
    case "py":
      grammar = Prism.languages.python;
      break;
    default:
      grammar = Prism.languages.python;
      break;
  }

  const highlightedCode = Prism.highlight(
    children,
    grammar,
    language
  );

  const sanitizedCode = DOMPurify.sanitize(highlightedCode, {
    ALLOWED_TAGS: ["span"],
    ALLOWED_ATTR: ["class"]
  });

  return (
    <div className="relative group">
      <pre className="bg-muted text-muted-foreground py-0 px-6 rounded-lg overflow-x-auto text-sm font-jetbrains-mono my-8">
        <CopyButton text={children} />
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: sanitizedCode }}
        />
      </pre>
    </div>
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }: ComponentWithChildren) => (
      <h1 className="text-3xl font-extrabold tracking-tight text-accent font-sans mt-20 mb-10 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: ComponentWithChildren) => (
      <h2 className="text-2xl font-bold tracking-tight text-accent font-sans mt-16 mb-8 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }: ComponentWithChildren) => (
      <h3 className="text-xl font-semibold text-accent font-sans mt-12 mb-6 leading-snug">
        {children}
      </h3>
    ),
    h4: ({ children }: ComponentWithChildren) => (
      <h4 className="text-lg font-medium text-accent font-sans mt-10 mb-4 leading-snug">
        {children}
      </h4>
    ),
    p: ({ children }: ComponentWithChildren) => (
      <p className="text-lg font-normal text-foreground/90 font-sans leading-8 my-6">
        {children}
      </p>
    ),
    a: ({ children, href }: { children?: React.ReactNode; href?: string }) => (
      <a
        href={href}
        className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors font-sans"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }: ComponentWithChildren) => (
      <ul className="list-disc list-outside space-y-6 text-foreground/90 font-sans my-10 pl-8 text-lg">
        {children}
      </ul>
    ),
    ol: ({ children }: ComponentWithChildren) => (
      <ol className="list-decimal list-outside space-y-6 text-foreground/90 font-sans my-10 pl-8 text-lg">
        {children}
      </ol>
    ),
    li: ({ children }: ComponentWithChildren) => (
      <li className="text-foreground/90 font-sans leading-8 pl-3">
        {children}
      </li>
    ),
    code: ({ children, className }: { children: string; className?: string }) => {
      if (className) {
        return <CodeBlock className={className}>{children}</CodeBlock>;
      }
      return (
        <code className="bg-zinc-100 text-zinc-800 rounded px-2 py-1 text-sm font-mono">
          {children}
        </code>
      );
    },
    pre: ({ children }: ComponentWithChildren) => (
      <pre className="bg-zinc-900 text-zinc-100 rounded-lg mb-8 overflow-x-auto text-sm font-mono p-4">
        {children}
      </pre>
    ),
    blockquote: ({ children }: ComponentWithChildren) => (
      <blockquote className="border-l-4 border-blue-400 pl-6 ml-0 mr-0 my-8 italic text-zinc-700 bg-zinc-50 font-sans">
        {children}
      </blockquote>
    ),
    hr: () => (
      <hr className="border-none border-t border-zinc-200 my-12" />
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        className="w-full h-auto rounded-lg my-8 shadow"
        {...(props as ImageProps)}
      />
    ),
    strong: ({ children }: ComponentWithChildren) => (
      <strong className="font-semibold text-foreground font-sans">
        {children}
      </strong>
    ),
    em: ({ children }: ComponentWithChildren) => (
      <em className="italic text-foreground/80 font-sans">
        {children}
      </em>
    ),
    table: ({ children }: ComponentWithChildren) => (
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm text-foreground/90 font-sans">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: ComponentWithChildren) => (
      <thead className="border-b-2 border-zinc-200">
        {children}
      </thead>
    ),
    tbody: ({ children }: ComponentWithChildren) => (
      <tbody>
        {children}
      </tbody>
    ),
    tr: ({ children }: ComponentWithChildren) => (
      <tr className="border-b border-zinc-100">
        {children}
      </tr>
    ),
    th: ({ children }: ComponentWithChildren) => (
      <th className="py-3 px-4 text-left font-semibold text-foreground font-sans bg-zinc-50">
        {children}
      </th>
    ),
    td: ({ children }: ComponentWithChildren) => (
      <td className="py-3 px-4 text-left font-sans">
        {children}
      </td>
    ),
    ...components,
  };
}
