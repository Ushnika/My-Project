import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Topbar from "@/components/common/Topbar";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Topbar />
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
}
