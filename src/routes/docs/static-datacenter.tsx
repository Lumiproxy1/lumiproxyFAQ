import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/static-datacenter")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/docs/static-datacenter" || location.pathname === "/docs/static-datacenter/") {
      throw redirect({ to: "/docs/static-datacenter/intro" });
    }
  },
  component: () => <Outlet />,
});
