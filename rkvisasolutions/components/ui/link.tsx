import * as React from "react"
import NextLink from "next/link"
import { cn } from "@/lib/utils"

const Link = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof NextLink>
>(({ className, children, ...props }, ref) => {
  return (
    <NextLink
      className={cn(
        "font-medium underline underline-offset-4 hover:no-underline",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </NextLink>
  )
})

Link.displayName = "Link"

export { Link } 