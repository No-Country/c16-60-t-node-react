import Footer from "./_components/layout/Footer";
import Navbar from "./_components/layout/Navbar";

export const metadata = {
  title: "Smart Help",
  description: "Home",
};
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
