import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/static-residential/quickstart")({
  component: () => <MarkdownDoc slug="static-residential/quickstart" />,
});
