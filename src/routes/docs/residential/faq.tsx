import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/residential/faq")({
  component: () => <MarkdownDoc slug="residential/faq" />,
});
