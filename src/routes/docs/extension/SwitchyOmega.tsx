import { createFileRoute } from "@tanstack/react-router";
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute("/docs/extension/SwitchyOmega")({
  component: () => <MarkdownDoc slug="extension/SwitchyOmega" />,
});
