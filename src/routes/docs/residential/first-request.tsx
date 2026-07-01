import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/residential/first-request")({
  component: () => <MarkdownDoc slug="residential/first-request" />,
});
