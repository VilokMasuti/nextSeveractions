import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
  
     <div  className=" min-h-screen max-w-full flex-col bg-gradient-to-b from-sky-400 to-sky-200 mx-auto flex items-center justify-center">
      <h1 className="  text-5xl font-bold  text-black"> SERVER </h1>
      <Link href={'/user-management'} className=" underline from-neutral-800">
      <Button className=" bg-red-500 W-[80%]">GET IN </Button>
      </Link>
     
     </div>
  );
}
