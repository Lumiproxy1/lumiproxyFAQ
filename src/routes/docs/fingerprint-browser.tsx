import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/fingerprint-browser")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/docs/fingerprint-browser" || location.pathname === "/docs/fingerprint-browser/") {
      throw redirect({ to: "/docs/fingerprint-browser/adspower" });
    }
  },
  component: () => <Outlet />,
});
