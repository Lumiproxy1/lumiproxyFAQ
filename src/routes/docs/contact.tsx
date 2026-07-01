import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/contact")({
  component: () => <MarkdownDoc slug="contact" />,
});
