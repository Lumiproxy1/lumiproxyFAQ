import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/isp/intro")({
  component: () => <MarkdownDoc slug="isp/intro" />,
});
