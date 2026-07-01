import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/intro")({
  component: () => <MarkdownDoc slug="intro" />,
});
