import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumiproxy | Proxy Tutorial Docs" },
      { name: "description", content: "Bilingual Lumiproxy tutorial — residential, datacenter, ISP proxies, fingerprint browsers, chain proxies." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  return (
    <div>
      <section className="border-b border-border bg-gradient-to-b from-secondary/60 to-background">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center">
          <img src={logo} alt="logo" className="mb-6 h-24 w-24 rounded-2xl shadow-lg" />
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            {t("site.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t("hero.subtitle")}</p>
          <Link
            to="/docs/intro"
            className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition hover:opacity-90"
          >
            {t("hero.cta")}
          </Link>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-16 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">{t(`feat.${i}.title`)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(`feat.${i}.desc`)}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
