import Footer from "../_components/Footer";

export const metadata = {
  title: "SEO Title",
  description: "SEO Title",
};
export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#FAFAFA]">
      {children}
      <Footer />
    </div>
  );
}
