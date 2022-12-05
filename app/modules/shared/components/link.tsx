import { Link as RemixLink } from "@remix-run/react";

import type { Props } from "./props";

interface LinkProps extends Props {
  href: string;
}

export function Link({ children, href }: LinkProps) {
  return (
    <RemixLink to={href}>
      <div className="cursor-pointer text-primary">{children}</div>
    </RemixLink>
  );
}
