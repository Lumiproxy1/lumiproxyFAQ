import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/residential/configuration")({
  component: () => <MarkdownDoc slug="residential/configuration" />,
});
