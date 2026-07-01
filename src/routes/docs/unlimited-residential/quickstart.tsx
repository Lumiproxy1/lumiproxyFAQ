import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/unlimited-residential/quickstart")({
  component: () => <MarkdownDoc slug="unlimited-residential/quickstart" />,
});
