import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/isp/faq")({
  component: () => <MarkdownDoc slug="isp/faq" />,
});
