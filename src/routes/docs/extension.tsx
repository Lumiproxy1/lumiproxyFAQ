import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/extension")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/docs/extension" || location.pathname === "/docs/extension/") {
      throw redirect({ to: "/docs/extension/SwitchyOmega" });
    }
  },
  component: () => <Outlet />,
});
