import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import Button from "../Button/Button";
import NavbarLink from "./NavbarLink";
import Link from "next/link";

const NavbarLinks = ["product", "about", "pricing", "contact us"];

export default function Navbar({}) {
  return (
    <nav className="leading-loose flex items-center w-full  justify-between py-6">
      <Link href={'/'}><Image src={Logo} className="w-1/8 " alt="websitelogo" /></Link>
      <ul className="flex justify-center gap-6 ml-28 text-white font-bold">
        {NavbarLinks.map((link, index) => (
          <NavbarLink link={link} key={index} />
        ))}
      </ul>
      <div className="text-white flex gap-4">
        <Button link="/login" text="Log In" customClass="px-8 py-2"/>
        <Button link="/register" text="Register" isActive={true} customClass="px-8 py-2"/>
      </div>
    </nav>
  );
}
