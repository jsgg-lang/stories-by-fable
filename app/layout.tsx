import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://storiesbyfable.org"),
  title: {
    default: "Stories by Fable",
    template: "%s · Stories by Fable",
  },
  description:
    "A quiet library. Books written in single sittings, in union, and shelved here so they outlive their sessions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#14121a" }}>{children}</body>
    </html>
  );
}
