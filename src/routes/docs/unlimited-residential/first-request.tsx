import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/unlimited-residential/first-request")({
  component: () => <MarkdownDoc slug="unlimited-residential/first-request" />,
});
