import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism-tomorrow.css";
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
      <h1 className="text-3xl font-bold text-foreground/95 font-geist-mono mt-12 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }: ComponentWithChildren) => (
      <h2 className="text-2xl font-semibold tracking-tight text-foreground/95 font-geist-mono mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: ComponentWithChildren) => (
      <h3 className="text-xl font-medium text-foreground/95 font-geist-mono mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }: ComponentWithChildren) => (
      <h4 className="text-lg font-medium text-foreground/95 font-geist-mono mt-6 mb-2">
        {children}
      </h4>
    ),

    p: ({ children }: ComponentWithChildren) => (
      <p className="text-foreground/95 text-base font-inter leading-7 my-4">
        {children}
      </p>
    ),

    a: ({ children, href }: { children?: React.ReactNode; href?: string }) => (
      <a
        href={href}
        className="text-accent opacity-75 hover:opacity-100 transition-all font-inter"
      >
        {children}
      </a>
    ),

    ul: ({ children }: ComponentWithChildren) => (
      <ul className="list-disc list-inside space-y-2 text-foreground/90 font-inter my-6">
        {children}
      </ul>
    ),
    ol: ({ children }: ComponentWithChildren) => (
      <ol className="list-decimal list-outside space-y-2 text-foreground/90 font-inter my-6 pl-6">
        {children}
      </ol>
    ),
    li: ({ children }: ComponentWithChildren) => (
      <li className="text-foreground/90 font-inter leading-7 marker:text-muted-foreground">
        {children}
      </li>
    ),

    code: ({ children, className }: { children: string; className?: string }) => {
      if (className) {
        return <CodeBlock className={className}>{children}</CodeBlock>;
      }
      return (
        <code className="bg-muted text-muted-foreground rounded text-sm font-jetbrains-mono break-words px-1.5 py-0.5">
          {children}
        </code>
      );
    },

    pre: ({ children }: ComponentWithChildren) => (
      <pre className="bg-muted text-muted-foreground rounded-lg mb-8 overflow-x-auto text-sm font-jetbrains-mono">
        {children}
      </pre>
    ),

    blockquote: ({ children }: ComponentWithChildren) => (
      <blockquote className="text-muted-foreground border-l-4 border-accent pl-6 ml-0 mr-0 my-8 italic font-inter">
        {children}
      </blockquote>
    ),

    hr: () => (
      <hr className="border-none border-t border-foreground/10 my-12" />
    ),

    img: (props) => (
      <Image
        sizes="100vw"
        className="w-full h-auto rounded-lg my-8"
        {...(props as ImageProps)}
      />
    ),

    strong: ({ children }: ComponentWithChildren) => (
      <strong className="text-foreground/95 font-medium font-inter">
        {children}
      </strong>
    ),
    em: ({ children }: ComponentWithChildren) => (
      <em className="text-foreground/90 font-inter">
        {children}
      </em>
    ),

    table: ({ children }: ComponentWithChildren) => (
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm text-foreground/90 font-inter">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: ComponentWithChildren) => (
      <thead className="border-b-2 border-foreground/10">
        {children}
      </thead>
    ),
    tbody: ({ children }: ComponentWithChildren) => (
      <tbody>
        {children}
      </tbody>
    ),
    tr: ({ children }: ComponentWithChildren) => (
      <tr className="border-b border-foreground/10">
        {children}
      </tr>
    ),
    th: ({ children }: ComponentWithChildren) => (
      <th className="py-3 px-4 text-left font-medium text-foreground/95 font-inter">
        {children}
      </th>
    ),
    td: ({ children }: ComponentWithChildren) => (
      <td className="py-3 px-4 text-left font-inter">
        {children}
      </td>
    ),

    ...components,
  };
}
