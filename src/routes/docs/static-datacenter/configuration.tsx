import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/static-datacenter/configuration")({
  component: () => <MarkdownDoc slug="static-datacenter/configuration" />,
});
