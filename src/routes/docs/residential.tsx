import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/residential")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/docs/residential" || location.pathname === "/docs/residential/") {
      throw redirect({ to: "/docs/residential/intro" });
    }
  },
  component: () => <Outlet />,
});
