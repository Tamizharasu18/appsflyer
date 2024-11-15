import Appsflyer from "@/Component/Appsflyer/Appsflyer";
import BoxAnimation from "@/Component/BoxAnimation/BoxAnimation";
import GoodInsights from "@/Component/GoodInsights/GoodInsights";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Appsflyer/>
      <GoodInsights/>
      <BoxAnimation/>
    </div>
    
  );
}
