import { Footer, Header } from "@/components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="main_wrapper">{children}</main>
      <Footer />
    </>
  );
}
