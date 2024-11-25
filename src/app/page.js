import Appsflyer from "@/Component/Appsflyer/Appsflyer";
import BoxAnimation from "@/Component/BoxAnimation/BoxAnimation";
import GoodInsights from "@/Component/GoodInsights/GoodInsights";
import Navbar from "@/Component/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Appsflyer/>
      <GoodInsights/>
      <BoxAnimation/>
    </div>
    
  );
}
