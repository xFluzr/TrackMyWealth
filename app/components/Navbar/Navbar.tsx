import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import Link from "next/link";
import Button from "../Button/Button";

const links = ["Product", "Services", "Pricing", "About"];

export default function Navbar({}) {

  return (
    <nav className="flex items-center gap-12 justify-between px-6 py-12">
      <Image src={Logo} className="w-1/3 md:w-1/2" alt="" />
      <ul className="flex gap-6">
        <li>
          <Link className="text-xl md:text-md" href={"/"}>Home</Link>
        </li>
        <li>
          <Link className="text-xl" href={"/product"}>Product</Link>
        </li>
        <li>
          <Link className="text-xl" href={"/services"}>Services</Link>
        </li>
        <li>
          <Link className="text-xl" href={"/about"}>About</Link>
        </li>
      </ul>
      <Button link="/register" text="Get Started"/>
    </nav>
  );
}
