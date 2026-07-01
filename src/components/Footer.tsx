import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-muted-foreground">
        {t("footer.copy")}
      </div>
    </footer>
  );
}
