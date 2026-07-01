import { createFileRoute } from '@tanstack/react-router'
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute('/docs/extension/Postern')({
    component: () => <MarkdownDoc slug="extension/Postern" />,
})


