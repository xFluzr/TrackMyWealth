import Link from "next/link"

type BtnProps={
    link:string,
    isActive?:boolean,
    text:string
}
export default function Button({link,isActive=false,text}:BtnProps){
    return(
    <Link href={link} className={`rounded-sm ${isActive ? 'bg-green-400':''}`} >
        {text}
    </Link>)
}