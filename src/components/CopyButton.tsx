"use client"
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <button
            onClick={copyToClipboard}
            className="absolute cursor-pointer hover:bg-white/10 -top-6 right-2 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            aria-label="Copy code"
        >
            {copied ? (
                <Check className="size-4 text-green-500" />
            ) : (
                <Copy className="size-4 text-muted-foreground" />
            )}
        </button>
    );
};