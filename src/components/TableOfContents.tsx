import { useEffect, useMemo, useState } from "react";
import GithubSlugger from "github-slugger";
import { useI18n } from "@/lib/i18n";

export type TocItem = { depth: 2 | 3; text: string; id: string };

export function extractToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  const lines = markdown.split("\n");
  let inFence = false;
  for (const line of lines) {
    if (/^```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = line.match(/^(#{2,3})\s+(.+?)\s*#*\s*$/);
    if (!m) continue;
    const depth = m[1].length as 2 | 3;
    const text = m[2].replace(/`/g, "").trim();
    if (!text) continue;
    items.push({ depth, text, id: slugger.slug(text) });
  }
  return items;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {t("toc.title")}
      </p>
      <ul className="space-y-1.5 border-l border-border">
        {items.map((item) => {
          const active = activeId === item.id;
          return (
            <li key={item.id} style={{ paddingLeft: item.depth === 3 ? "1.25rem" : "0.75rem" }}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.id);
                  if (el) {
                    window.history.replaceState(null, "", `#${item.id}`);
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`-ml-px block border-l py-1 transition-colors ${
                  active
                    ? "border-primary font-medium text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
