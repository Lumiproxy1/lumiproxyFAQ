import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "highlight.js/styles/github-dark.css";
import { useI18n } from "@/lib/i18n";
import { DocsLayout } from "./DocsLayout";
import { ZoomableImage } from "./ZoomableImage";
import { remarkAdmonitions } from "@/lib/remark-admonitions";
import { extractToc, TableOfContents } from "./TableOfContents";

const files = import.meta.glob("/src/content/docs/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function pick(slug: string, lang: "zh" | "en"): string {
  const key = `/src/content/docs/${slug}.${lang}.md`;
  return files[key] ?? `# Not found\n\n\`${key}\``;
}

function extractTitle(md: string): { title: string; body: string } {
  const m = md.match(/^#\s+(.+)\s*\n+/);
  if (!m) return { title: "", body: md };
  return { title: m[1].trim(), body: md.slice(m[0].length) };
}

// Convert Docusaurus-style ":::tip 标题" to remark-directive ":::tip[标题]"
const ADMONITION_NAMES = "note|tip|info|warning|caution|danger|important";
function normalizeAdmonitions(md: string): string {
  const re = new RegExp(`^(:{3,})(${ADMONITION_NAMES})[ \\t]+([^\\n\\[][^\\n]*)$`, "gm");
  return md.replace(re, (_m, colons, name, title) => `${colons}${name}[${title.trim()}]`);
}

export function MarkdownDoc({ slug }: { slug: string }) {
  const { lang } = useI18n();
  const { title, body: rawBody } = extractTitle(pick(slug, lang));
  const body = normalizeAdmonitions(rawBody);
  const toc = extractToc(body);
  return (
    <DocsLayout toc={<TableOfContents items={toc} />}>
      {title && <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground">{title}</h1>}
      <div className="markdown-body space-y-4 text-black leading-7 [&_*]:text-black [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1 [&_a]:underline [&_code]:rounded [&_code]:bg-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_pre]:rounded-lg [&_pre]:bg-secondary [&_pre]:p-4 [&_pre]:text-sm [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_table]:w-full [&_table]:border-collapse [&_table]:my-4 [&_th]:border [&_th]:border-border [&_th]:px-3 [&_th]:py-2 [&_th]:bg-secondary [&_th]:text-left [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkDirective, remarkAdmonitions]}
          rehypePlugins={[
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
            rehypeHighlight,
          ]}
          components={{
            img: ({ src, alt }) =>
              src ? <ZoomableImage src={String(src)} alt={alt ?? ""} /> : null,
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
    </DocsLayout>
  );
}
