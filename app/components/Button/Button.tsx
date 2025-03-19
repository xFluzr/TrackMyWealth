import Link from "next/link";

type BtnProps = {
  link: string;
  isActive?: boolean;
  text: string;
};
export default function Button({ link, isActive = false, text }: BtnProps) {
  return (
    <Link
      href={link}
      className={`text-center rounded-full font-bold border-slate-800 border-2 px-8 py-4 text-xl transition-all hover:shadow-lg ${
        isActive ? "bg-green-400" : ""
      }`}
    >
      {text}
    </Link>
  );
}
