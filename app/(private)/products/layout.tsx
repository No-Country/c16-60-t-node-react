import Footer from "../_components/Footer";

export const metadata = {
  title: "Productos",
  description: "Productos disponibles para ir en ayuda de las personas afectadas",
};
export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#FAFAFA]">
      {children}
      <Footer />
    </div>
  );
}
