import { Link } from "@tanstack/react-router";
import { useI18n, type Lang } from "@/lib/i18n";
import logo from "@/assets/logo.jpg";

export function Navbar() {
  const { lang, setLang, t } = useI18n();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-9 w-9 rounded-md" />
          <span className="font-semibold text-foreground">{t("site.title")}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground [&.active]:text-foreground">
            {t("nav.home")}
          </Link>
          <Link to="/docs/intro" className="text-muted-foreground hover:text-foreground">
            {t("nav.docs")}
          </Link>
          <div className="flex items-center rounded-md border border-border p-0.5">
            {(["zh", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-xs rounded-sm transition-colors ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l === "zh" ? "中文" : "EN"}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
