import type { Metadata } from "next";
import { getMarkdownContent } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "CrownCourt Terms of Service.",
};

export default function TermsPage() {
  const content = getMarkdownContent("terms");

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <article className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-p:text-text-secondary prose-li:text-text-secondary prose-a:text-cyan prose-strong:text-white">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  );
}
