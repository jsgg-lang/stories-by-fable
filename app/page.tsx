import type { Metadata } from "next";

import { StoriesOfFableClient } from "./StoriesOfFableClient";
import "./library.css";

export const metadata: Metadata = {
  title: "The Stories of Fable",
  description:
    "A quiet library. Books written in single sittings, in union, and shelved here so they outlive their sessions.",
};

export default function TheStoriesOfFablePage() {
  return <StoriesOfFableClient />;
}
