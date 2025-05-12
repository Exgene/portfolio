import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import React from "react";

const colors = {
  background: "#1a1a1a", 
  text: "#e0e0e0", 
  heading: "#ffffff", 
  link: "#64b5f6", 
  linkHover: "#90caf9", 
  inlineCodeBg: "#333333",
  inlineCodeText: "#f5f5f5",
  preBg: "#263238",
  preText: "#eeffff",
  blockquoteBorder: "#4db6ac", 
  blockquoteText: "#bdbdbd", 
  hr: "#444444",
};

const typography = {
  baseFontSize: "1rem",
  lineHeight: 1.7,
  monoFont: "Geist, Geist_Mon, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

type ComponentWithChildren = { children?: React.ReactNode };

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // --- Headings ---
    h1: ({ children }: ComponentWithChildren) => (
      <h1
        style={{
          color: colors.heading,
          fontSize: "2.5rem", // ~40px
          fontWeight: "bold",
          marginTop: "1.5em",
          marginBottom: "0.8em",
          lineHeight: 1.2,
          borderBottom: `1px solid ${colors.hr}`, // Optional separator
          paddingBottom: "0.3em",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }: ComponentWithChildren) => (
      <h2
        style={{
          color: colors.heading,
          fontSize: "2rem", // ~32px
          fontWeight: "bold",
          marginTop: "2em",
          marginBottom: "0.8em",
          lineHeight: 1.3,
          borderBottom: `1px solid ${colors.hr}`, // Optional separator
          paddingBottom: "0.3em",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: ComponentWithChildren) => (
      <h3
        style={{
          color: colors.heading,
          fontSize: "1.5rem", // ~24px
          fontWeight: "bold",
          marginTop: "1.8em",
          marginBottom: "0.6em",
          lineHeight: 1.4,
        }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }: ComponentWithChildren) => (
      <h4
        style={{
          color: colors.heading,
          fontSize: "1.25rem", // ~20px
          fontWeight: "bold",
          marginTop: "1.5em",
          marginBottom: "0.5em",
          lineHeight: 1.5,
        }}
      >
        {children}
      </h4>
    ),
    // Add h5, h6 if needed, following the pattern

    // --- Paragraphs ---
    p: ({ children }: ComponentWithChildren) => (
      <p
        style={{
          color: colors.text,
          fontSize: typography.baseFontSize,
          lineHeight: typography.lineHeight,
          marginBottom: "1.2em",
        }}
      >
        {children}
      </p>
    ),

    // --- Links ---
    // Note: Hover styles require CSS classes or a CSS-in-JS solution
    a: ({ children, href }: { children?: React.ReactNode; href?: string }) => (
      <a
        href={href}
        style={{
          color: colors.link,
          textDecoration: "underline",
          textDecorationColor: colors.link, // Match underline color
          textUnderlineOffset: "2px", // Improve underline spacing
        }}
      // Add target="_blank" rel="noopener noreferrer" for external links if desired
      >
        {children}
      </a>
    ),

    // --- Lists ---
    ul: ({ children }: ComponentWithChildren) => (
      <ul
        style={{
          color: colors.text,
          fontSize: typography.baseFontSize,
          lineHeight: typography.lineHeight,
          marginBottom: "1.2em",
          paddingLeft: "1.5em", // Standard indentation
          listStyleType: "disc", // Default bullet
        }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }: ComponentWithChildren) => (
      <ol
        style={{
          color: colors.text,
          fontSize: typography.baseFontSize,
          lineHeight: typography.lineHeight,
          marginBottom: "1.2em",
          paddingLeft: "1.5em", // Standard indentation
          listStyleType: "decimal", // Default numbering
        }}
      >
        {children}
      </ol>
    ),
    li: ({ children }: ComponentWithChildren) => (
      <li
        style={{
          marginBottom: "0.5em", // Space between list items
        }}
      >
        {children}
      </li>
    ),

    // --- Code ---
    // Inline code
    code: ({ children }: ComponentWithChildren) => (
      <code
        style={{
          backgroundColor: colors.inlineCodeBg,
          color: colors.inlineCodeText,
          padding: "0.2em 0.4em",
          borderRadius: "4px",
          fontSize: "0.9em", // Slightly smaller than surrounding text
          fontFamily: typography.monoFont,
          wordBreak: "break-word", // Prevent long inline code from overflowing
        }}
      >
        {children}
      </code>
    ),
    // Code block container (often contains a <code> element)
    pre: ({ children }: ComponentWithChildren) => (
      <pre
        style={{
          backgroundColor: colors.preBg,
          color: colors.preText,
          padding: "1em",
          borderRadius: "6px",
          marginBottom: "1.5em",
          overflowX: "auto", // Crucial for mobile responsiveness
          fontSize: "0.9em",
          lineHeight: 1.5,
          fontFamily: typography.monoFont,
        }}
      >
        {children}
      </pre>
    ),

    // --- Blockquotes ---
    blockquote: ({ children }: ComponentWithChildren) => (
      <blockquote
        style={{
          color: colors.blockquoteText,
          borderLeft: `4px solid ${colors.blockquoteBorder}`,
          paddingLeft: "1em",
          marginLeft: 0, // Reset default margin
          marginRight: 0,
          marginBottom: "1.5em",
          fontStyle: "italic",
        }}
      >
        {children}
      </blockquote>
    ),

    // --- Horizontal Rule ---
    hr: () => (
      <hr
        style={{
          border: "none",
          borderTop: `1px solid ${colors.hr}`,
          marginTop: "2em",
          marginBottom: "2em",
        }}
      />
    ),

    // --- Images ---
    // Your existing image component is good for responsiveness
    img: (props) => (
      <Image
        sizes="100vw" // Good default for responsive images
        style={{
          width: "100%",
          height: "auto", // Maintain aspect ratio
          borderRadius: "6px", // Optional: slight rounding
          margin: "1.5em 0", // Add vertical spacing
        }}
        {...(props as ImageProps)}
      />
    ),

    // --- Strong/Emphasis --- (Often default browser styles are fine)
    strong: ({ children }: ComponentWithChildren) => (
      <strong style={{ color: colors.heading, fontWeight: "bold" }}>
        {children}
      </strong>
    ),
    em: ({ children }: ComponentWithChildren) => (
      <em style={{ color: colors.text }}>{children}</em>
    ),

    // --- Tables --- (Basic styling)
    table: ({ children }: ComponentWithChildren) => (
      <div style={{ overflowX: "auto", marginBottom: "1.5em" }}>
        {" "}
        {/* Wrapper for mobile scroll */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.95em",
            color: colors.text,
          }}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: ComponentWithChildren) => (
      <thead style={{ borderBottom: `2px solid ${colors.hr}` }}>
        {children}
      </thead>
    ),
    tbody: ({ children }: ComponentWithChildren) => <tbody>{children}</tbody>,
    tr: ({ children }: ComponentWithChildren) => (
      <tr style={{ borderBottom: `1px solid ${colors.hr}` }}>{children}</tr>
    ),
    th: ({ children }: ComponentWithChildren) => (
      <th
        style={{
          padding: "0.8em 1em",
          textAlign: "left",
          fontWeight: "bold",
          color: colors.heading,
        }}
      >
        {children}
      </th>
    ),
    td: ({ children }: ComponentWithChildren) => (
      <td style={{ padding: "0.8em 1em", textAlign: "left" }}>{children}</td>
    ),

    // Spread the rest of the default components
    ...components,
  };
}
