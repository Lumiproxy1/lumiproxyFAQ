import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/isp/quickstart")({
  component: () => <MarkdownDoc slug="isp/quickstart" />,
});
