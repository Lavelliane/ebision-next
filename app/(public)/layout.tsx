import Footer from "@/components/Footer";
import { Navbar } from "@/components/ui/Navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      {/* Background grid lines */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 mx-auto max-w-8xl">
        <div className="flex h-full justify-evenly">
          <div className="w-px bg-foreground/10" />
          <div className="w-px bg-foreground/10" />
          <div className="w-px bg-foreground/10" />
        </div>
      </div>

      <div className="relative z-10 max-w-8xl w-full flex flex-col mx-auto">
        <Navbar />
        {children}
      </div>
      <Footer />
    </main>
  );
}
