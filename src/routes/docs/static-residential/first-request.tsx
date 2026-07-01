import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/static-residential/first-request")({
  component: () => <MarkdownDoc slug="static-residential/first-request" />,
});
