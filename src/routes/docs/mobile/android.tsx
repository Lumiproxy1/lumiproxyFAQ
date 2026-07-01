import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/mobile/android")({
  component: () => <MarkdownDoc slug="mobile/android" />,
});
