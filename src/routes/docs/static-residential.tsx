import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/static-residential")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/docs/static-residential" || location.pathname === "/docs/static-residential/") {
      throw redirect({ to: "/docs/static-residential/intro" });
    }
  },
  component: () => <Outlet />,
});
