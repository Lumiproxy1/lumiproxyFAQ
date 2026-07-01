import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/chain-proxy/proxifier")({
  component: () => <MarkdownDoc slug="chain-proxy/proxifier" />,
});
