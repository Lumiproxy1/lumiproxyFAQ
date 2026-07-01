import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/chain-proxy/v2rayn")({
  component: () => <MarkdownDoc slug="chain-proxy/v2rayn" />,
});
