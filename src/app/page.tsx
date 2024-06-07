import CoolLightCard from "@/components/CoolLightCard";
import ImageVanish from "@/components/ImageVanish";
import Test from "@/components/Test";
import Typing from "@/components/Typing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CoolLightCard />
      <Typing />
      <ImageVanish />
      <Test />
    </main>
  );
}
