import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/static-datacenter/first-request")({
  component: () => <MarkdownDoc slug="static-datacenter/first-request" />,
});
