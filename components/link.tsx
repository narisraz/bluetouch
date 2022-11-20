import NextLink from "next/link";
import { Props } from "./props";

interface LinkProps extends Props {
  href: string;
}

export default function Link({ children, href }: LinkProps) {
  return (
    <NextLink href={href}>
      <div className="text-primary cursor-pointer">{children}</div>
    </NextLink>
  );
}
