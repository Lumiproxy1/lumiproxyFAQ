import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/residential/quickstart")({
  component: () => <MarkdownDoc slug="residential/quickstart" />,
});
