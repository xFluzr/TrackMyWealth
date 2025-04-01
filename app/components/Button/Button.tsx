import Link from "next/link";

type BtnProps = {
  link: string;
  isActive?: boolean;
  text: string;
  customClass?:string
};
export default function Button({ link, isActive = false, text,customClass="" }: BtnProps) {
  return (
    <Link
      href={link}
      className={`text-center font-main rounded-full font-bold text-md transition-all hover:opacity-75 hover:shadow-md ${
        isActive ? `${customClass} bg-white text-black ` : ""+customClass
      }`}
    >
      {text}
    </Link>
  );
}
