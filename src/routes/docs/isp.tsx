import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/isp")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/docs/isp" || location.pathname === "/docs/isp/") {
      throw redirect({ to: "/docs/isp/intro" });
    }
  },
  component: () => <Outlet />,
});
