'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ['latin'] })

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const scrollToTutorial = () => {
    if (pathname !== "/")router.push('/#tutorial');
    document.getElementById("tutorial")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFeatures = () => {
    if (pathname !== "/")router.push('/#features');
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    if (pathname !== "/")router.push('/');
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 p-4 flex justify-around items-center z-50 bg-[#0D0D0D] backdrop-blur-sm ${urbanist.className}`}>
      <div className={`flex items-center gap-2 ${urbanist.className}`}>
        <Link href="/">
          <Image src="/logo.webp" alt="logo" width={150} height={60} />
        </Link>
      </div>
      <div className={`flex items-center gap-8 cursor-pointer ${urbanist.className}`}>
        <p onClick={scrollToHome} className={`text-white hover:text-gray-300 transition-colors ${urbanist.className}`}>Home</p>
        <p  onClick={scrollToFeatures} className="text-white hover:text-gray-300 transition-colors">Features</p>
        <p  onClick={scrollToTutorial} className="text-white hover:text-gray-300 transition-colors">Tutorial</p>
        {pathname === "/" && ( // Only show the button on the home page
          <Button 
            className="bg-[#33101A] text-white border-2 z-1 border-white rounded-xl px-6 py-2 
            relative overflow-hidden"
          >
            <Link href="/select">
              Get Your Dream Team Now
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
