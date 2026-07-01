import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { ReactNode, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Leaf = { to: string; key: string };
type Group = { key: string; basePath: string; children: Leaf[] };
type Item = Leaf | Group;

const isGroup = (i: Item): i is Group => "children" in i;

const SUB_KEYS = [
  { slug: "intro", key: "sub.intro" },
  { slug: "quickstart", key: "sub.quickstart" },
  { slug: "configuration", key: "sub.configuration" },
  { slug: "first-request", key: "sub.first-request" },
  { slug: "faq", key: "sub.faq" },
];

const makeGroup = (slug: string, key: string): Group => ({
  key,
  basePath: `/docs/${slug}`,
  children: SUB_KEYS.map((s) => ({ to: `/docs/${slug}/${s.slug}`, key: s.key })),
});

const customGroup = (slug: string, key: string, children: { slug: string; key: string }[]): Group => ({
  key,
  basePath: `/docs/${slug}`,
  children: children.map((c) => ({ to: `/docs/${slug}/${c.slug}`, key: c.key })),
});

export const menu: Item[] = [
  { to: "/docs/intro", key: "menu.intro" },
  makeGroup("residential", "menu.residential"),
  makeGroup("unlimited-residential", "menu.unlimited-residential"),
  makeGroup("static-residential", "menu.static-residential"),
  makeGroup("static-datacenter", "menu.static-datacenter"),
  makeGroup("isp", "menu.isp"),
  customGroup("extension", "menu.extension", [
    { slug: "SwitchyOmega", key: "sub.ext.SwitchyOmega" },
    { slug: "FoxyProxy", key: "sub.ext.FoxyProxy" },
    { slug: "Postern", key: "sub.ext.Postern" },
  ]),
  customGroup("mobile", "menu.mobile", [
    { slug: "android", key: "sub.mobile.android" },
    { slug: "ios", key: "sub.mobile.ios" },
  ]),
  customGroup("fingerprint-browser", "menu.fingerprint-browser", [
    { slug: "adspower", key: "sub.fp.adspower" },
    { slug: "bitbrowser", key: "sub.fp.bitbrowser" },
    { slug: "ziniao", key: "sub.fp.ziniao" },
    { slug: "ixbrowser", key: "sub.fp.ixbrowser" },
    { slug: "hubstudio", key: "sub.fp.hubstudio" },
    { slug: "MuLogin", key: "sub.fp.MuLogin" },
    { slug: "MoreLogin", key: "sub.fp.MoreLogin" },
    { slug: "GoLogin", key: "sub.fp.GoLogin" },
    { slug: "linkensphere", key: "sub.fp.linkensphere" },
    { slug: "VMLogin", key: "sub.fp.VMLogin" },
  ]),
  customGroup("chain-proxy", "menu.chain-proxy", [
    { slug: "clash-verge", key: "sub.cp.clash-verge" },
    { slug: "v2rayn", key: "sub.cp.v2rayn" },
    { slug: "proxifier", key: "sub.cp.proxifier" },
  ]),
  { to: "/docs/contact", key: "menu.contact" },
];

export const flatPages: Leaf[] = menu.flatMap((i) => (isGroup(i) ? i.children : [i]));

export function DocsLayout({ children, toc }: { children: ReactNode; toc?: ReactNode }) {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const idx = flatPages.findIndex((p) => p.to === pathname);
  const prev = idx > 0 ? flatPages[idx - 1] : null;
  const next = idx >= 0 && idx < flatPages.length - 1 ? flatPages[idx + 1] : null;

  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8">
      <aside className="hidden w-64 shrink-0 md:block">
        <nav className="sticky top-20">
          <ul className="space-y-1">
            {menu.map((item) =>
              isGroup(item) ? (
                <GroupItem key={item.basePath} item={item} pathname={pathname} t={t} />
              ) : (
                <LeafItem key={item.to} item={item} active={pathname === item.to} t={t} />
              )
            )}
          </ul>
        </nav>
      </aside>
      <main className="min-w-0 flex-1">
        <article className="prose-doc">{children}</article>
        <div className="mt-12 flex justify-between border-t border-border pt-6 text-sm">
          {prev ? (
            <Link to={prev.to} className="text-primary hover:underline">
              {t("edit.prev")} {t(prev.key)}
            </Link>
          ) : <span />}
          {next ? (
            <Link to={next.to} className="text-primary hover:underline">
              {t(next.key)} {t("edit.next")}
            </Link>
          ) : <span />}
        </div>
      </main>
      {toc && (
        <aside className="hidden w-56 shrink-0 xl:block">
          <div className="sticky top-20">{toc}</div>
        </aside>
      )}
    </div>
  );
}

function LeafItem({ item, active, t }: { item: Leaf; active: boolean; t: (k: string) => string }) {
  return (
    <li>
      <Link
        to={item.to}
        className={`block rounded-md px-3 py-2 text-sm transition-colors ${
          active
            ? "bg-primary/10 font-medium text-primary"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        }`}
      >
        {t(item.key)}
      </Link>
    </li>
  );
}

function GroupItem({ item, pathname, t }: { item: Group; pathname: string; t: (k: string) => string }) {
  const isInside = pathname.startsWith(item.basePath);
  const [open, setOpen] = useState(isInside);
  const navigate = useNavigate();

  useEffect(() => {
    if (isInside) setOpen(true);
  }, [isInside]);

  const firstChild = item.children[0];

  return (
    <li>
      <button
        type="button"
        onClick={() => {
          const next = !open;
          setOpen(next);
          if (next && !isInside && firstChild) {
            navigate({ to: firstChild.to });
          }
        }}
        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
          isInside ? "font-medium text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        }`}
      >
        <span>{t(item.key)}</span>
        <ChevronRight className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>
      {open && (
        <ul className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
          {item.children.map((c) => {
            const active = pathname === c.to;
            return (
              <li key={c.to}>
                <Link
                  to={c.to}
                  className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {t(c.key)}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
