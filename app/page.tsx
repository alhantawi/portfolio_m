import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className=" relative bg-black-100">
      <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}/>
     
     

     <Hero />
     <Grid />
    </main>
  );
}
