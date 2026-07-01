import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/chain-proxy")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/docs/chain-proxy" || location.pathname === "/docs/chain-proxy/") {
      throw redirect({ to: "/docs/chain-proxy/clash-verge" });
    }
  },
  component: () => <Outlet />,
});
