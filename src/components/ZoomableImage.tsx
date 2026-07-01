import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ZoomIn, ZoomOut, X, RotateCcw } from "lucide-react";

export function ZoomableImage({ src, alt }: { src: string; alt?: string }) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const reset = useCallback(() => setScale(1), []);

  useEffect(() => {
    if (!open) return;
    reset();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "+" || e.key === "=") setScale((s) => Math.min(s + 0.25, 5));
      if (e.key === "-") setScale((s) => Math.max(s - 0.25, 0.25));
      if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, reset]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.min(5, Math.max(0.25, s + (e.deltaY < 0 ? 0.15 : -0.15))));
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onClick={() => setOpen(true)}
        className="my-4 max-w-full cursor-zoom-in rounded-md border border-border"
      />
      {open && typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            onWheel={onWheel}
          >
            <div className="absolute right-4 top-4 z-10 flex gap-2">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setScale((s) => Math.min(5, s + 0.25)); }}
                className="rounded-md bg-background/90 p-2 text-foreground hover:bg-background"
                aria-label="Zoom in"
              >
                <ZoomIn className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setScale((s) => Math.max(0.25, s - 0.25)); }}
                className="rounded-md bg-background/90 p-2 text-foreground hover:bg-background"
                aria-label="Zoom out"
              >
                <ZoomOut className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); reset(); }}
                className="rounded-md bg-background/90 p-2 text-foreground hover:bg-background"
                aria-label="Reset zoom"
              >
                <RotateCcw className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setOpen(false); }}
                className="rounded-md bg-background/90 p-2 text-foreground hover:bg-background"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <img
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              style={{ transform: `scale(${scale})`, transition: "transform 0.15s ease-out" }}
              className="max-h-[90vh] max-w-[90vw] cursor-zoom-out select-none"
              draggable={false}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-background/90 px-3 py-1 text-xs text-muted-foreground">
              {Math.round(scale * 100)}%
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
