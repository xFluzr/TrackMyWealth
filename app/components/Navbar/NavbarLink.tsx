import Link from "next/link";

type NavbarLinksProps={
    link:string;
}

export default function NavbarLink({
    link
}:NavbarLinksProps) {
  return (
    <li>
      <Link className="text-xl capitalize" href={`/${link}`}>
        {link}
      </Link>
    </li>
  );
}
