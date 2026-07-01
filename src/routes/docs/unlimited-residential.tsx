import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/unlimited-residential")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/docs/unlimited-residential" || location.pathname === "/docs/unlimited-residential/") {
      throw redirect({ to: "/docs/unlimited-residential/intro" });
    }
  },
  component: () => <Outlet />,
});
