import Header from "@/components/header";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8">
      <Header />
      <div className="mt-12 w-full flex justify-center">
        <Gallery />
      </div>
    </main>
  );
}
