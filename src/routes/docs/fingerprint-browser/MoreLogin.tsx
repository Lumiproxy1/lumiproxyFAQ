import { createFileRoute } from '@tanstack/react-router'
import { MarkdownDoc } from "@/components/MarkdownDoc";

export const Route = createFileRoute('/docs/fingerprint-browser/MoreLogin')({
    component: () => <MarkdownDoc slug="fingerprint-browser/MoreLogin" />,
})


