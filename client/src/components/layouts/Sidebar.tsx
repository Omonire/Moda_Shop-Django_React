import { Link } from "react-router-dom"
import { UserAvatar } from "../ui/UserAvatar"
import { Container } from "@/components/ui/Container"
import { BrandLogo } from "@/components/common/BrandLogo"
import { NavList } from "@/components/common/NavList"
import { useUser } from "@/context/user-context"
import { paths } from "@/config/paths"

export function Sidebar() {
  const { user } = useUser()

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 border-r border-border bg-surface md:block">
      <Container className="flex h-16 items-center border-b border-border">
        <BrandLogo />
      </Container>

      <Container className="py-6">
        <div className="mb-6">
          <Link
            to={paths.app.profile.path}
            className="flex items-center gap-3 rounded-card bg-subtle px-3 py-3 transition-colors hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <UserAvatar />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                {user?.first_name} {user?.last_name}
              </p>
              <p className="truncate text-xs text-muted-foreground">{user?.username}</p>
            </div>
          </Link>
        </div>

        <NavList variant="sidebar" />
      </Container>
    </aside>
  )
}
