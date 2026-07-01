import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/mobile")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/docs/mobile" || location.pathname === "/docs/mobile/") {
      throw redirect({ to: "/docs/mobile/android" });
    }
  },
  component: () => <Outlet />,
});
