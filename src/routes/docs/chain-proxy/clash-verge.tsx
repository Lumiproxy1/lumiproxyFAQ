import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/chain-proxy/clash-verge")({
  component: () => <MarkdownDoc slug="chain-proxy/clash-verge" />,
});
