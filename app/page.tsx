import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Intro from "@/components/Intro";

// app/page.tsx
export default function Page() {
  return (
    <>
      <Intro />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
