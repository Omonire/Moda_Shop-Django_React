import { Link, useLocation } from "react-router-dom"
import { cn } from "@/utils/cn"
import { paths } from "@/config/paths"
import { sidebarItems } from "@/constants/sidebar-item"

interface NavListProps {
  variant?: "sidebar" | "mobile"
  onNavigate?: () => void
  className?: string
}

export function NavList({ variant = "sidebar", onNavigate, className }: NavListProps) {
  const { pathname } = useLocation()
  const isMobile = variant === "mobile"

  const isActive = (href: string) =>
    pathname === href ||
    (href !== paths.app.root.path && pathname.startsWith(`${href}/`))

  return (
    <nav aria-label={isMobile ? "Navegación móvil" : "Navegación principal"} className={className}>
      <ul className={cn("space-y-1", isMobile && "space-y-2")}>
        {sidebarItems.map((item) => {
          const active = isActive(item.href)

          return (
            <li key={item.id}>
              <Link
                to={item.href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group flex items-center gap-3 rounded-control px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  active && "bg-surface-raised shadow-card",
                  isMobile && "justify-between py-3"
                )}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-control bg-subtle text-foreground transition-colors group-hover:bg-ring group-hover:text-background",
                      active && "bg-ring text-background"
                    )}
                  >
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>{item.title}</span>
                </span>
                {isMobile && (
                  <span
                    className={cn("h-2 w-2 rounded-full bg-subtle", active && "bg-ring")}
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
